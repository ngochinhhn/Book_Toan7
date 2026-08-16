import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Lazy get Gemini instance
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Health Check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API Chatbot with Gemini
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, contextLesson, question, message, history } = req.body;
    const ai = getGeminiClient();

    const systemInstruction = `Bạn là Trợ Lý AI Gia Sư Toán 7 xuất sắc và tận tâm, chuyên sâu bộ sách giáo khoa "Toán 7 - Kết nối tri thức với cuộc sống".
Mục tiêu của bạn là hướng dẫn học sinh lớp 7 hiểu sâu bản chất kiến thức, nắm vững phương pháp giải các dạng toán, giải thích chi tiết từng bước, chỉ ra các lỗi sai thường gặp và đưa ra mẹo nhớ nhanh.

Phong cách giải đáp:
1. Luôn ân cần, khích lệ và sử dụng ngôn từ sư phạm dễ hiểu cho học sinh lớp 7.
2. Trình bày công thức toán học rõ ràng bằng cú pháp LaTeX kẹp trong dấu $...$ (nội dòng) hoặc $$...$$ (khối công thức riêng). Ví dụ: $\\frac{a}{b} = \\frac{c}{d}$, $\\sqrt{x}$, $x^n$.
3. Khi hướng dẫn bài tập:
   - Nêu phương pháp / kiến thức áp dụng.
   - Trình bày lời giải chi tiết từng bước kèm giải thích (vì sao có bước đó).
   - Đưa ra "Lưu ý / Bẫy thường gặp" hoặc cách thử lại kết quả.
4. Nếu học sinh hỏi kiến thức của bài học nào, hãy bám sát chương trình Toán 7 (Số hữu tỉ, Số thực, Góc & đường thẳng song song, Tam giác bằng nhau, Thống kê biểu đồ quạt/đoạn thẳng, Tỉ lệ thức, Đa thức một biến, Xác suất biến cố, v.v.).`;

    let promptContent = "";
    if (contextLesson) {
      promptContent += `[Ngữ cảnh bài học hiện tại: ${contextLesson.title} - ${contextLesson.chapterTitle}]\n\n`;
    }

    const currentQuery = question || message;

    if (Array.isArray(history) && history.length > 0) {
      const historyText = history
        .map((h: { role: string; text?: string; content?: string }) => {
          const roleName = h.role === "user" ? "Học sinh" : "Gia sư AI";
          return `${roleName}: ${h.text || h.content || ""}`;
        })
        .join("\n\n");
      promptContent += historyText;
      if (currentQuery && !history.some((h: any) => (h.text || h.content) === currentQuery)) {
        promptContent += `\n\nHọc sinh: ${currentQuery}`;
      }
    } else if (Array.isArray(messages) && messages.length > 0) {
      const conversationText = messages
        .map((m: { role: string; content?: string; text?: string }) => `${m.role === "user" ? "Học sinh" : "Gia sư AI"}: ${m.content || m.text || ""}`)
        .join("\n\n");
      promptContent += conversationText;
    } else if (currentQuery) {
      promptContent += `Câu hỏi của học sinh: ${currentQuery}`;
    } else {
      return res.status(400).json({ error: "Missing message or question payload" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: promptContent,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "Xin lỗi, thầy/cô chưa thể đưa ra câu trả lời lúc này. Bạn hãy thử lại nhé!";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Không thể kết nối với trợ lý AI. Vui lòng kiểm tra lại thiết lập hoặc thử lại sau.",
      details: error.message,
    });
  }
});

// API Solve Exercise Step-by-Step
app.post("/api/solve-step-by-step", async (req, res) => {
  try {
    const { exerciseTitle, exerciseContent, lessonTitle } = req.body;
    const ai = getGeminiClient();

    const systemInstruction = `Bạn là chuyên gia sư phạm Toán học. Hãy giải chi tiết bài tập Toán 7 sau đây một cách khoa học, rõ ràng và chuẩn mực theo chương trình Kết nối tri thức với cuộc sống.
Định dạng trả về:
- **Tóm tắt đề bài & Giả thiết - Kết luận** (nếu là hình học)
- **Phương pháp giải & Công thức cần dùng**
- **Lời giải chi tiết từng bước** (dùng công thức LaTeX $...$ hoặc $$...$$)
- **Kết luận đáp số**
- **Lưu ý / Cách kiểm tra lại kết quả**`;

    const prompt = `Bài học: ${lessonTitle || "Toán 7"}\nTên bài tập: ${exerciseTitle || "Bài tập"}\nNội dung đề bài:\n${exerciseContent}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3,
      },
    });

    res.json({ solution: response.text });
  } catch (error: any) {
    console.error("Error solving exercise:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start Server & mount Vite
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Toan 7 App Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
