import React, { useState } from 'react';
import { BookOpen, Search, Copy, Check, Sparkles, Filter } from 'lucide-react';
import MathView from './MathView';

interface FormulaItem {
  id: string;
  category: 'Đại số' | 'Hình học' | 'Thống kê & Xác suất';
  chapter: string;
  title: string;
  latex: string;
  description: string;
  note?: string;
}

const FORMULAS_LIST: FormulaItem[] = [
  // Đại số - Số hữu tỉ & Luỹ thừa
  {
    id: 'f-1',
    category: 'Đại số',
    chapter: 'Chương 1: Số hữu tỉ',
    title: 'Nhân & chia hai luỹ thừa cùng cơ số',
    latex: 'x^m \\cdot x^n = x^{m+n}; \\qquad x^m : x^n = x^{m-n} \\quad (x \\neq 0, m \\ge n)',
    description: 'Khi nhân hai luỹ thừa cùng cơ số giữ nguyên cơ số cộng số mũ; khi chia giữ nguyên cơ số trừ số mũ.'
  },
  {
    id: 'f-2',
    category: 'Đại số',
    chapter: 'Chương 1: Số hữu tỉ',
    title: 'Luỹ thừa của luỹ thừa',
    latex: '(x^m)^n = x^{m \\cdot n}',
    description: 'Giữ nguyên cơ số và nhân các số mũ với nhau.'
  },
  {
    id: 'f-3',
    category: 'Đại số',
    chapter: 'Chương 1: Số hữu tỉ',
    title: 'Luỹ thừa của một tích và một thương',
    latex: '(x \\cdot y)^n = x^n \\cdot y^n; \\qquad \\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n} \\quad (y \\neq 0)',
    description: 'Luỹ thừa của một tích bằng tích các luỹ thừa; luỹ thừa của một thương bằng thương các luỹ thừa.'
  },
  {
    id: 'f-4',
    category: 'Đại số',
    chapter: 'Chương 1: Số hữu tỉ',
    title: 'Quy tắc chuyển vế',
    latex: 'x + b = c \\implies x = c - b; \\qquad x - b = c \\implies x = c + b',
    description: 'Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó (+ đổi thành -, - đổi thành +).'
  },
  {
    id: 'f-5',
    category: 'Đại số',
    chapter: 'Chương 2: Số thực',
    title: 'Căn bậc hai số học',
    latex: '\\sqrt{a} = x \\iff (x \\ge 0 \\text{ và } x^2 = a) \\quad (a \\ge 0)',
    description: 'Căn bậc hai số học của số a không âm là số x không âm sao cho x bình phương bằng a.'
  },
  {
    id: 'f-6',
    category: 'Đại số',
    chapter: 'Chương 2: Số thực',
    title: 'Giá trị tuyệt đối của một số thực',
    latex: '|x| = \\begin{cases} x & \\text{khi } x \\ge 0 \\\\ -x & \\text{khi } x < 0 \\end{cases}',
    description: 'Giá trị tuyệt đối của một số thực luôn là một số không âm: |x| >= 0.'
  },
  {
    id: 'f-7',
    category: 'Đại số',
    chapter: 'Chương 6: Tỉ lệ thức',
    title: 'Tính chất cơ bản của tỉ lệ thức',
    latex: '\\frac{a}{b} = \\frac{c}{d} \\iff a \\cdot d = b \\cdot c \\quad (b, d \\neq 0)',
    description: 'Tích ngoại tỉ bằng tích trung tỉ (tích chéo bằng nhau).'
  },
  {
    id: 'f-8',
    category: 'Đại số',
    chapter: 'Chương 6: Tỉ lệ thức',
    title: 'Tính chất của dãy tỉ số bằng nhau',
    latex: '\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{a+c+e}{b+d+f} = \\frac{a-c+e}{b-d+f}',
    description: 'Tổng (hoặc hiệu) các tử số trên tổng (hoặc hiệu) các mẫu số tương ứng.'
  },
  {
    id: 'f-9',
    category: 'Đại số',
    chapter: 'Chương 6: Đại lượng tỉ lệ',
    title: 'Đại lượng tỉ lệ thuận và tỉ lệ nghịch',
    latex: '\\text{Thuận: } y = ax; \\qquad \\text{Nghịch: } y = \\frac{a}{x} \\text{ hay } x \\cdot y = a',
    description: 'Tỉ lệ thuận: tỉ số y/x không đổi. Tỉ lệ nghịch: tích x * y không đổi.'
  },
  {
    id: 'f-10',
    category: 'Đại số',
    chapter: 'Chương 7: Đa thức',
    title: 'Phép nhân hai đa thức',
    latex: '(A + B)(C + D) = AC + AD + BC + BD',
    description: 'Nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các tích lại.'
  },
  {
    id: 'f-11',
    category: 'Đại số',
    chapter: 'Chương 7: Đa thức',
    title: 'Công thức phép chia đa thức có dư',
    latex: 'A = B \\cdot Q + R \\quad (R = 0 \\text{ hoặc bậc}(R) < \\text{bậc}(B))',
    description: 'Đa thức bị chia = Đa thức chia * Thương + Dư.'
  },

  // Hình học
  {
    id: 'f-12',
    category: 'Hình học',
    chapter: 'Chương 3: Góc và đường thẳng song song',
    title: 'Tính chất hai đường thẳng song song',
    latex: 'a \\parallel b \\implies \\widehat{A_1} = \\widehat{B_1} \\text{ (so le trong)}, \\; \\widehat{A_1} = \\widehat{B_2} \\text{ (đồng vị)}',
    description: 'Nếu một đường thẳng cắt hai đường thẳng song song thì các cặp góc so le trong bằng nhau, các cặp góc đồng vị bằng nhau.'
  },
  {
    id: 'f-13',
    category: 'Hình học',
    chapter: 'Chương 4: Tam giác bằng nhau',
    title: 'Tổng ba góc trong một tam giác',
    latex: '\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ',
    description: 'Tổng số đo ba góc của một tam giác luôn bằng 180 độ.'
  },
  {
    id: 'f-14',
    category: 'Hình học',
    chapter: 'Chương 4: Tam giác bằng nhau',
    title: '3 trường hợp bằng nhau của tam giác thường',
    latex: '\\text{1. } c-c-c; \\qquad \\text{2. } c-g-c; \\qquad \\text{3. } g-c-g',
    description: 'Cạnh-cạnh-cạnh; Cạnh-góc xen giữa-cạnh; Góc-cạnh xen giữa-góc.'
  },
  {
    id: 'f-15',
    category: 'Hình học',
    chapter: 'Chương 4: Tam giác bằng nhau',
    title: 'Tính chất tam giác cân',
    latex: '\\Delta ABC \\text{ cân tại } A \\iff AB = AC \\iff \\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}',
    description: 'Trong tam giác cân, hai cạnh bên bằng nhau và hai góc ở đáy bằng nhau.'
  },
  {
    id: 'f-16',
    category: 'Hình học',
    chapter: 'Chương 9: Quan hệ trong tam giác',
    title: 'Bất đẳng thức tam giác',
    latex: '|b - c| < a < b + c',
    description: 'Độ dài một cạnh luôn nhỏ hơn tổng hai cạnh kia và lớn hơn hiệu hai cạnh kia.'
  },
  {
    id: 'f-17',
    category: 'Hình học',
    chapter: 'Chương 9: Quan hệ trong tam giác',
    title: 'Tính chất trọng tâm tam giác (3 trung tuyến)',
    latex: '\\frac{GA}{AM} = \\frac{GB}{BN} = \\frac{GC}{CP} = \\frac{2}{3}',
    description: 'Trọng tâm G cách đỉnh một khoảng bằng 2/3 độ dài đường trung tuyến đi qua đỉnh ấy.'
  },
  {
    id: 'f-18',
    category: 'Hình học',
    chapter: 'Chương 10: Khối không gian',
    title: 'Diện tích và Thể tích hình hộp chữ nhật',
    latex: 'S_{xq} = 2(a + b)c; \\qquad S_{tp} = S_{xq} + 2ab; \\qquad V = a \\cdot b \\cdot c',
    description: 'a: chiều dài, b: chiều rộng, c: chiều cao.'
  },
  {
    id: 'f-19',
    category: 'Hình học',
    chapter: 'Chương 10: Khối không gian',
    title: 'Diện tích và Thể tích hình lăng trụ đứng',
    latex: 'S_{xq} = C_{\\text{đáy}} \\cdot h; \\qquad V = S_{\\text{đáy}} \\cdot h',
    description: 'Diện tích xung quanh = Chu vi đáy * Chiều cao; Thể tích = Diện tích đáy * Chiều cao.'
  },

  // Thống kê & Xác suất
  {
    id: 'f-20',
    category: 'Thống kê & Xác suất',
    chapter: 'Chương 8: Xác suất',
    title: 'Xác suất của biến cố đồng khả năng',
    latex: 'P = \\frac{1}{k} \\quad (0 \\le P \\le 1)',
    description: 'k là số biến cố đồng khả năng và luôn xảy ra duy nhất 1 biến cố.'
  }
];

export const FormulaHandbook: React.FC<{ onOpenChat: (prompt: string) => void }> = ({
  onOpenChat,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredFormulas = FORMULAS_LIST.filter((f) => {
    const matchesSearch =
      !searchTerm ||
      f.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.chapter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || f.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="flex-1 bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-teal-100 shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-teal-700 text-white rounded-lg">
                <i className="fa-solid fa-square-root-variable text-base"></i>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Sổ Tay Công Thức Toán 7 Toàn Diện
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Tra cứu nhanh toàn bộ định lí, tính chất và công thức trọng tâm cả 2 tập SGK Toán 7 Kết nối tri thức.
            </p>
          </div>

          <button
            onClick={() =>
              onOpenChat(
                'Hãy tạo cho em 1 đề kiểm tra nhanh 5 câu hỏi trắc nghiệm kiểm tra trí nhớ công thức Toán 7.'
              )
            }
            className="px-4 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Đố Nhanh Công Thức</span>
          </button>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm công thức (VD: luỹ thừa, tỉ lệ thức, lăng trụ...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            {['all', 'Đại số', 'Hình học', 'Thống kê & Xác suất'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-900'
                }`}
              >
                {cat === 'all' ? 'Tất cả phân môn' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Formulas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.map((formula) => (
          <div
            key={formula.id}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 hover:border-teal-300 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                  {formula.chapter}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    formula.category === 'Đại số'
                      ? 'bg-blue-50 text-blue-700'
                      : formula.category === 'Hình học'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-purple-50 text-purple-700'
                  }`}
                >
                  {formula.category}
                </span>
              </div>

              <h3 className="text-sm font-bold text-slate-900 mb-3">{formula.title}</h3>

              {/* LaTeX Box */}
              <div className="p-3.5 bg-teal-900/5 border border-teal-100 rounded-xl text-center mb-3">
                <div className="text-sm font-semibold text-teal-950">
                  <MathView content={`$$${formula.latex}$$`} />
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-2">{formula.description}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={() => handleCopy(formula.id, formula.latex)}
                className="text-slate-500 hover:text-teal-700 flex items-center gap-1 font-medium transition"
                title="Sao chép công thức dạng LaTeX"
              >
                {copiedId === formula.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Đã sao chép</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy LaTeX</span>
                  </>
                )}
              </button>

              <button
                onClick={() =>
                  onOpenChat(
                    `Giải thích và cho 2 ví dụ áp dụng công thức: "${formula.title}" ($${formula.latex}$)`
                  )
                }
                className="text-teal-700 hover:text-teal-900 font-bold flex items-center gap-1"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Hỏi AI về công thức này</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormulaHandbook;
