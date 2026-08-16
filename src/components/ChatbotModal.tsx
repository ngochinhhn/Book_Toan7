import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  Maximize2,
  Minimize2,
  Copy,
  Check,
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import MathView from './MathView';
import { ChatMessage } from '../types';

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

const PRESET_PROMPTS = [
  'Hướng dẫn các bước chứng minh 2 tam giác bằng nhau (c-g-c, g-c-g)',
  'Cách tìm x trong tỉ lệ thức và dãy tỉ số bằng nhau',
  'Làm sao để tìm nghiệm của một đa thức một biến?',
  'Phân biệt số hữu tỉ, số vô tỉ và số thực',
  'Tính diện tích xung quanh và thể tích hình lăng trụ đứng tam giác',
];

export const ChatbotModal: React.FC<ChatbotModalProps> = ({
  isOpen,
  onClose,
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Xin chào bạn! Mình là **Gia Sư AI Toán 7 (Kết nối tri thức)** 📐✨.\n\nBạn có thắc mắc về lý thuyết, cần hướng dẫn giải bài tập SGK hay muốn luyện thêm các dạng toán nào, cứ nhắn cho mình nhé!',
      timestamp: Date.now(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // If opened with an initial prompt, set it or trigger send
  useEffect(() => {
    if (initialPrompt && isOpen) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build conversation history for API
      const conversationHistory = messages
        .filter((m) => m.id !== 'welcome')
        .concat(userMsg)
        .map((m) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          text: m.content,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: conversationHistory,
        }),
      });

      if (!res.ok) {
        throw new Error('Lỗi kết nối máy chủ AI');
      }

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: data.reply || 'Xin lỗi, mình chưa thể xử lý câu hỏi này ngay lúc này.',
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content:
          '⚠️ Có lỗi khi kết nối với máy chủ AI. Vui lòng kiểm tra lại kết nối mạng hoặc thử lại sau giây lát!',
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content:
          'Đã làm mới cuộc trò chuyện! Bạn muốn hỏi về bài toán hay chuyên đề nào tiếp theo?',
        timestamp: Date.now(),
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/50 backdrop-blur-xs">
      <div
        className={`bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-teal-200 transition-all duration-300 ${
          isExpanded
            ? 'w-full h-full max-w-5xl max-h-[95vh]'
            : 'w-full max-w-2xl h-[650px] max-h-[90vh]'
        }`}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-gradient-to-r from-teal-800 to-emerald-900 text-white flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-600/80 border border-teal-400/40 flex items-center justify-center text-teal-200 shadow-inner">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm">Gia Sư AI Toán 7 (Gemini)</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-teal-200">
                Sách Kết Nối Tri Thức • Hỗ trợ công thức LaTeX & giải từng bước
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-teal-200">
            <button
              onClick={handleClearHistory}
              className="p-1.5 rounded-lg hover:bg-teal-700/60 hover:text-white transition text-xs flex items-center gap-1"
              title="Làm mới đoạn chat"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg hover:bg-teal-700/60 hover:text-white transition"
              title={isExpanded ? 'Thu nhỏ' : 'Mở rộng'}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-teal-700/60 hover:text-white transition"
              title="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Preset Prompt Chips */}
        <div className="px-4 py-2.5 bg-teal-50/70 border-b border-teal-100 flex items-center gap-1.5 overflow-x-auto select-none">
          <span className="text-[11px] font-bold text-teal-900 shrink-0 flex items-center gap-1">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" /> Gợi ý hỏi:
          </span>
          {PRESET_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="px-2.5 py-1 rounded-full bg-white hover:bg-teal-100 text-teal-900 border border-teal-200 text-[11px] font-medium whitespace-nowrap transition"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/50">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs shrink-0 shadow-2xs ${
                    isUser
                      ? 'bg-teal-700 text-white font-bold'
                      : 'bg-white border border-teal-200 text-teal-800'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4 text-teal-700" />}
                </div>

                <div
                  className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-2xs relative group ${
                    isUser
                      ? 'bg-teal-800 text-white rounded-tr-xs'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs'
                  }`}
                >
                  <MathView content={msg.content} />

                  {!isUser && (
                    <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Gia Sư AI Toán 7</span>
                      <button
                        onClick={() => handleCopy(msg.id, msg.content)}
                        className="hover:text-teal-700 flex items-center gap-1 font-medium"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Đã sao chép</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Sao chép</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {isLoading && (
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white border border-teal-200 text-teal-800 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-xs p-4 shadow-2xs flex items-center gap-2 text-xs text-slate-500">
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-teal-600 animate-bounce [animation-delay:0.4s]"></span>
                <span className="ml-1 text-teal-900 font-medium">Gia Sư AI đang suy nghĩ và tính toán...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-end gap-2"
          >
            <div className="flex-1 relative">
              <textarea
                rows={2}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                placeholder="Nhập câu hỏi toán 7 (ví dụ: Giải bài 1.5 SGK trang 10 hoặc giải thích định lý góc so le trong)..."
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-3 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white rounded-xl font-bold shadow-xs transition flex items-center justify-center shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1.5 px-1">
            <span>Nhấn Enter để gửi, Shift + Enter để xuống dòng</span>
            <span>Hỗ trợ hiển thị công thức Toán học KaTeX chuẩn</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotModal;
