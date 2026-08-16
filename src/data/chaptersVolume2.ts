import { Chapter } from '../types';

export const chapter6: Chapter = {
  id: 'chuong-6',
  volume: 2,
  number: 6,
  romanNumeral: 'Chương VI',
  title: 'Tỉ Lệ Thức và Đại Lượng Tỉ Lệ',
  subtitle: 'Tỉ lệ thức, tính chất dãy tỉ số bằng nhau, đại lượng tỉ lệ thuận và tỉ lệ nghịch',
  iconName: 'Percent',
  color: 'teal',
  bgGradient: 'from-teal-600 to-emerald-600',
  lessons: [
    {
      id: 'bai-20',
      number: 20,
      chapterId: 'chuong-6',
      volume: 2,
      title: 'Tỉ lệ thức',
      subtitle: 'Định nghĩa tỉ lệ thức, tính chất tích chéo và hoán vị trung tỉ, ngoại tỉ',
      bookPage: 4,
      funFact: 'Lá cờ đỏ sao vàng Việt Nam luôn tuân thủ tỉ lệ chuẩn: Chiều rộng / Chiều dài = 2/3.',
      keyTheories: [
        {
          id: 'kt-20-1',
          title: 'Khái niệm Tỉ lệ thức',
          badge: 'Định nghĩa',
          content: 'Tỉ lệ thức là đẳng thức của hai tỉ số $\\frac{a}{b} = \\frac{c}{d}$ (còn được viết là $a:b = c:d$). Các số $a, d$ gọi là ngoại tỉ; $b, c$ gọi là trung tỉ.',
          formulaLatex: '\\frac{a}{b} = \\frac{c}{d} \\quad (b, d \\neq 0)'
        },
        {
          id: 'kt-20-2',
          title: 'Tính chất của tỉ lệ thức (Tích chéo)',
          badge: 'Tính chất vàng',
          content: 'Nếu $\\frac{a}{b} = \\frac{c}{d}$ thì $a \\cdot d = b \\cdot c$. Ngược lại, nếu $a \\cdot d = b \\cdot c$ (với $a, b, c, d \\neq 0$) thì ta có 4 tỉ lệ thức:',
          formulaLatex: 'ad = bc \\iff \\frac{a}{b} = \\frac{c}{d} = \\frac{a}{c} = \\frac{b}{d} = \\frac{d}{b} = \\frac{c}{a} = \\frac{d}{c} = \\frac{b}{a}'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-20-1',
          name: 'Ví dụ 2 (SGK Trang 6) - Tính chiều dài lá cờ theo tỉ lệ',
          problem: 'Các bạn dự định làm lá quốc kì Việt Nam bằng giấy đảm bảo tỉ lệ quy định $2:3$, chiều rộng $14\\text{ cm}$. Tính chiều dài lá cờ.',
          solution: 'Lập tỉ lệ thức và áp dụng tính chất tích chéo.',
          steps: [
            { step: 1, title: 'Gọi ẩn và lập tỉ lệ thức', math: '\\frac{14}{x} = \\frac{2}{3}', explanation: 'Gọi x (cm) là chiều dài, tỉ số rộng/dài = 2/3.' },
            { step: 2, title: 'Nhân chéo tìm x', math: 'x = \\frac{14 \\cdot 3}{2} = 21\\text{ cm}', explanation: 'Suy ra chiều dài là 21 cm.' }
          ],
          tips: 'Công thức tìm số hạng chưa biết: Lấy tích hai số đối diện chia cho số còn lại.'
        }
      ],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-20-1',
          code: '6.3a (SGK)',
          title: 'Tìm x trong tỉ lệ thức',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Tìm $x$ trong tỉ lệ thức: $\\frac{x}{6} = \\frac{-3}{4}$',
          options: [
            'A. $x = -4,5$',
            'B. $x = 4,5$',
            'C. $x = -8$',
            'D. $x = -2$'
          ],
          correctOption: 0,
          solution: 'Áp dụng tích chéo: $x = \\frac{6 \\cdot (-3)}{4} = \\frac{-18}{4} = -4,5$.',
          hint: 'x = (6 * -3) / 4.'
        }
      ],
      commonMistakes: [
        'Nhân chéo bị nhầm vị trí tử và mẫu.'
      ],
      flashcards: [
        {
          id: 'fc-20-1',
          front: 'Tính chất cơ bản của tỉ lệ thức a/b = c/d?',
          back: 'Tích ngoại tỉ bằng tích trung tỉ: a · d = b · c.',
          tag: 'Tính chất'
        }
      ]
    },
    {
      id: 'bai-21',
      number: 21,
      chapterId: 'chuong-6',
      volume: 2,
      title: 'Tính chất của dãy tỉ số bằng nhau',
      subtitle: 'Mở rộng tính chất tỉ số bằng nhau cho 2 và 3 đại lượng, ứng dụng chia tỉ lệ thực tế',
      bookPage: 8,
      funFact: 'Tính chất dãy tỉ số bằng nhau giúp giải quyết các bài toán chia tài sản, chia thưởng, phân bổ kinh phí cực kì nhanh chóng!',
      keyTheories: [
        {
          id: 'kt-21-1',
          title: 'Tính chất của dãy tỉ số bằng nhau',
          badge: 'Công thức trọng tâm',
          content: 'Từ tỉ lệ thức $\\frac{a}{b} = \\frac{c}{d}$ suy ra:',
          formulaLatex: '\\frac{a}{b} = \\frac{c}{d} = \\frac{a + c}{b + d} = \\frac{a - c}{b - d} \\quad (b \\neq d, b \\neq -d)',
          note: 'Mở rộng cho 3 tỉ số: $\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{a + c + e}{b + d + f} = \\frac{a - c + e}{b - d + f}$.'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-21-1',
          name: 'Ví dụ 1 (SGK Trang 8) - Tìm hai số biết tỉ số và tổng',
          problem: 'Tìm hai số $x$ và $y$, biết: $\\frac{x}{5} = \\frac{y}{11}$ và $x + y = 32$.',
          solution: 'Áp dụng tính chất của dãy tỉ số bằng nhau.',
          steps: [
            { step: 1, title: 'Áp dụng tính chất', math: '\\frac{x}{5} = \\frac{y}{11} = \\frac{x + y}{5 + 11} = \\frac{32}{16} = 2', explanation: 'Cộng tử với tử và mẫu với mẫu.' },
            { step: 2, title: 'Tìm x và y', math: 'x = 2 \\cdot 5 = 10; \\quad y = 2 \\cdot 11 = 22', explanation: 'Nhân hệ số 2 với từng mẫu số.' }
          ],
          tips: 'Kiểm tra lại: 10 + 22 = 32 và 10/5 = 22/11 = 2 (Đúng).'
        }
      ],
      topicTypes: [
        {
          id: 'dang-21-1',
          title: 'Dạng toán: Chia phần tỉ lệ thực tế',
          description: 'Bài toán chia số cây trồng, số vở, tiền vốn tỉ lệ với các số cho trước.',
          methods: [
            {
              name: 'Các bước giải chuẩn',
              steps: [
                'Bước 1: Gọi ẩn số và đặt điều kiện thích hợp.',
                'Bước 2: Lập dãy tỉ số bằng nhau và biểu thức tổng/hiệu theo đề bài.',
                'Bước 3: Áp dụng tính chất dãy tỉ số bằng nhau để tìm ẩn và kết luận kèm đơn vị.'
              ],
              example: {
                problem: 'Ba lớp 7A, 7B, 7C trồng được 120 cây, số cây tỉ lệ với 7; 8; 9. Tính số cây mỗi lớp (Bài 6.10 SGK).',
                solution: 'Gọi số cây lần lượt là $x, y, z$. Ta có $\\frac{x}{7} = \\frac{y}{8} = \\frac{z}{9} = \\frac{x+y+z}{7+8+9} = \\frac{120}{24} = 5$.\nSuy ra $x = 35, y = 40, z = 45$ (cây).'
              }
            }
          ],
          practiceExercises: []
        }
      ],
      practiceExercises: [
        {
          id: 'bt-21-1',
          code: '6.7 (SGK)',
          title: 'Tìm x, y biết tỉ số và tổng',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Tìm hai số $x$ và $y$, biết $\\frac{x}{9} = \\frac{y}{11}$ và $x + y = 40$:',
          options: [
            'A. $x = 18; y = 22$',
            'B. $x = 9; y = 11$',
            'C. $x = 20; y = 20$',
            'D. $x = 16; y = 24$'
          ],
          correctOption: 0,
          solution: '$\\frac{x}{9} = \\frac{y}{11} = \\frac{x+y}{9+11} = \\frac{40}{20} = 2 \\implies x = 18, y = 22$.',
          hint: 'Giá trị tỉ số chung k = 40 / 20 = 2.'
        }
      ],
      commonMistakes: [
        'Nhầm dấu giữa tử và mẫu khi trừ: Tử là x - y thì mẫu phải là b - d tương ứng.'
      ],
      flashcards: [
        {
          id: 'fc-21-1',
          front: 'Dãy tỉ số bằng nhau: a/b = c/d = ?',
          back: '(a + c) / (b + d) = (a - c) / (b - d)',
          tag: 'Công thức'
        }
      ]
    },
    {
      id: 'bai-22-23',
      number: 22,
      chapterId: 'chuong-6',
      volume: 2,
      title: 'Đại lượng tỉ lệ thuận và tỉ lệ nghịch',
      subtitle: 'Định nghĩa y = ax (thuận), y = a/x (nghịch), tính chất và các bài toán thực tiễn',
      bookPage: 11,
      funFact: 'Tỉ lệ thuận: đại lượng này tăng bao nhiêu lần thì đại lượng kia tăng bấy nhiêu lần. Tỉ lệ nghịch: đại lượng này tăng bao nhiêu lần thì đại lượng kia GIẢM bấy nhiêu lần.',
      keyTheories: [
        {
          id: 'kt-22-1',
          title: 'Đại lượng tỉ lệ thuận',
          badge: 'Định nghĩa & Tính chất',
          content: 'Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức $y = ax$ ($a$ là hằng số khác 0) thì ta nói $y$ tỉ lệ thuận với $x$ theo hệ số tỉ lệ $a$.',
          formulaLatex: 'y = ax \\implies \\frac{y_1}{x_1} = \\frac{y_2}{x_2} = \\frac{y_3}{x_3} = a; \\qquad \\frac{x_1}{x_2} = \\frac{y_1}{y_2}'
        },
        {
          id: 'kt-22-2',
          title: 'Đại lượng tỉ lệ nghịch',
          badge: 'Định nghĩa & Tính chất',
          content: 'Nếu đại lượng $y$ liên hệ với đại lượng $x$ theo công thức $y = \\frac{a}{x}$ hay $xy = a$ ($a$ là hằng số khác 0) thì $y$ tỉ lệ nghịch với $x$ theo hệ số tỉ lệ $a$.',
          formulaLatex: 'x \\cdot y = a \\implies x_1 y_1 = x_2 y_2 = \\dots = a; \\qquad \\frac{x_1}{x_2} = \\frac{y_2}{y_1}'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-22-1',
          code: '6.18a (SGK)',
          title: 'Kiểm tra hai đại lượng tỉ lệ thuận',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Cho bảng giá trị: $x = [5, 9, 15, 24]$ và $y = [15, 27, 45, 72]$. Hai đại lượng $x$ và $y$ có tỉ lệ thuận không? Hệ số tỉ lệ của y đối với x là:',
          options: [
            'A. Có, hệ số tỉ lệ $a = 3$',
            'B. Có, hệ số tỉ lệ $a = \\frac{1}{3}$',
            'C. Không tỉ lệ thuận',
            'D. Tỉ lệ nghịch'
          ],
          correctOption: 0,
          solution: 'Ta có $\\frac{15}{5} = \\frac{27}{9} = \\frac{45}{15} = \\frac{72}{24} = 3$ (hằng số không đổi), do đó $y$ tỉ lệ thuận với $x$ với hệ số tỉ lệ $a = 3$.',
          hint: 'Kiểm tra xem y / x có bằng nhau ở tất cả các cột không.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-22-1',
          front: 'Công thức tỉ lệ thuận và tỉ lệ nghịch?',
          back: 'Tỉ lệ thuận: y = ax (tỉ số y/x không đổi).\nTỉ lệ nghịch: y = a/x hoặc x · y = a (tích x · y không đổi).',
          tag: 'Tổng hợp'
        }
      ]
    }
  ]
};

export const chapter7: Chapter = {
  id: 'chuong-7',
  volume: 2,
  number: 7,
  romanNumeral: 'Chương VII',
  title: 'Biểu Thức Đại Số và Đa Thức Một Biến',
  subtitle: 'Biểu thức số, biểu thức đại số, đơn thức, đa thức một biến, cộng trừ nhân chia đa thức',
  iconName: 'Variable',
  color: 'teal',
  bgGradient: 'from-teal-600 to-slate-800',
  lessons: [
    {
      id: 'bai-24',
      number: 24,
      chapterId: 'chuong-7',
      volume: 2,
      title: 'Biểu thức đại số',
      subtitle: 'Khái niệm biểu thức số, biểu thức đại số, biến số và cách tính giá trị của biểu thức',
      bookPage: 22,
      funFact: 'Từ "Đại số" trong tiếng Hán mang ý nghĩa là "dùng chữ đại diện thay thế cho số".',
      keyTheories: [
        {
          id: 'kt-24-1',
          title: 'Khái niệm Biểu thức đại số',
          badge: 'Định nghĩa',
          content: 'Biểu thức chỉ chứa số gọi là biểu thức số. Biểu thức chứa số hoặc chứa chữ hoặc chứa cả số và chữ gọi chung là biểu thức đại số. Chữ đại diện cho số gọi là biến số.',
          formulaLatex: 'A = 3x^2 - 5x + 7; \\qquad S = a \\cdot b; \\qquad V = x(x+1)(x+2)'
        },
        {
          id: 'kt-24-2',
          title: 'Tính giá trị của biểu thức đại số',
          badge: 'Phương pháp',
          content: 'Muốn tính giá trị của một biểu thức đại số tại những giá trị cho trước của các biến, ta thay giá trị đã cho của mỗi biến vào biểu thức rồi thực hiện các phép tính.',
          highlight: 'Ví dụ: Tính $A = 4x + 3$ tại $x = 5,8 \\implies A = 4 \\cdot 5,8 + 3 = 23,2 + 3 = 26,2$.'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-24-1',
          code: '7.3b (SGK)',
          title: 'Tính giá trị biểu thức đại số',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Giá trị của biểu thức $y^2 - 2y + 1$ tại $y = 2$ là:',
          options: [
            'A. $1$',
            'B. $0$',
            'C. $5$',
            'D. $-1$'
          ],
          correctOption: 0,
          solution: 'Thay $y = 2$ vào biểu thức: $2^2 - 2 \\cdot 2 + 1 = 4 - 4 + 1 = 1$.',
          hint: 'Thay y = 2 vào từng vị trí của biến y.'
        }
      ],
      commonMistakes: [
        'Thay biến âm vào biểu thức nhưng quên đóng ngoặc (ví dụ $(-2)^2 = 4$ chứ không phải $-2^2 = -4$).'
      ],
      flashcards: [
        {
          id: 'fc-24-1',
          front: 'Cách tính giá trị biểu thức đại số?',
          back: 'Thay các giá trị đã cho của biến vào biểu thức rồi thực hiện các phép tính theo đúng thứ tự ưu tiên.',
          tag: 'Phương pháp'
        }
      ]
    },
    {
      id: 'bai-25',
      number: 25,
      chapterId: 'chuong-7',
      volume: 2,
      title: 'Đa thức một biến',
      subtitle: 'Đơn thức, đa thức thu gọn, bậc, hệ số cao nhất, hệ số tự do và nghiệm của đa thức',
      bookPage: 25,
      funFact: 'Số $x = a$ là nghiệm của đa thức $P(x)$ khi và chỉ khi $P(a) = 0$. Một đa thức bậc n có tối đa n nghiệm!',
      keyTheories: [
        {
          id: 'kt-25-1',
          title: 'Đơn thức & Đa thức một biến thu gọn',
          badge: 'Khái niệm',
          content: 'Đa thức một biến là tổng của những đơn thức của cùng một biến. Đa thức thu gọn là đa thức không chứa hai đơn thức nào cùng bậc.',
          formulaLatex: 'P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 \\quad (a_n \\neq 0)'
        },
        {
          id: 'kt-25-2',
          title: 'Bậc, Hệ số cao nhất và Hệ số tự do',
          badge: 'Thành phần đa thức',
          content: '- Bậc của đa thức thu gọn: là số mũ cao nhất của biến trong đa thức đó.\n- Hệ số cao nhất: là hệ số của luỹ thừa có bậc cao nhất.\n- Hệ số tự do: là số hạng không chứa biến (luỹ thừa bậc 0).'
        },
        {
          id: 'kt-25-3',
          title: 'Nghiệm của đa thức một biến',
          badge: 'Định nghĩa nghiệm',
          content: 'Nếu tại $x = a$, đa thức $P(x)$ có giá trị bằng 0 (tức là $P(a) = 0$) thì ta gọi $a$ (hoặc $x = a$) là một nghiệm của đa thức $P(x)$.',
          formulaLatex: 'x = a \\text{ là nghiệm của } P(x) \\iff P(a) = 0'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-25-1',
          name: 'Ví dụ 3 (SGK Trang 28) - Tìm bậc và các hệ số',
          problem: 'Tìm bậc, hệ số cao nhất và hệ số tự do của $P = -x^3 - 2x^2 + x^3 + 4x + 5$.',
          solution: 'Thu gọn đa thức trước rồi xác định các hệ số.',
          steps: [
            { step: 1, title: 'Thu gọn đa thức', math: 'P = (-x^3 + x^3) - 2x^2 + 4x + 5 = -2x^2 + 4x + 5', explanation: 'Gộp các hạng tử đồng dạng.' },
            { step: 2, title: 'Xác định bậc và hệ số', math: '\\text{Bậc: } 2; \\quad \\text{Hệ số cao nhất: } -2; \\quad \\text{Hệ số tự do: } 5', explanation: 'Bậc cao nhất là mũ 2 với hệ số -2.' }
          ],
          tips: 'BẮT BUỘC phải thu gọn đa thức trước khi tìm bậc và hệ số cao nhất!'
        }
      ],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-25-1',
          code: '7.10 (SGK)',
          title: 'Kiểm tra nghiệm của đa thức',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Trong các số $\\{-1; 1; 2\\}$, số nào là nghiệm của đa thức $Q(x) = x^2 + x - 2$?',
          options: [
            'A. $x = -1$',
            'B. $x = 1$',
            'C. $x = 2$',
            'D. Cả A và B'
          ],
          correctOption: 1,
          solution: 'Thay $x = 1$: $Q(1) = 1^2 + 1 - 2 = 0$. Thay $x = -1$: $Q(-1) = 1 - 1 - 2 = -2 \\neq 0$. Thay $x = 2$: $Q(2) = 4 + 2 - 2 = 4 \\neq 0$. Vậy $x = 1$ là nghiệm.',
          hint: 'Thay số vào đa thức, số nào cho kết quả bằng 0 thì là nghiệm.'
        }
      ],
      commonMistakes: [
        'Không thu gọn đa thức trước khi tìm bậc, dẫn đến kết luận sai bậc.'
      ],
      flashcards: [
        {
          id: 'fc-25-1',
          front: 'Nghiệm của đa thức P(x) là gì?',
          back: 'Là giá trị x = a sao cho P(a) = 0.',
          tag: 'Định nghĩa'
        }
      ]
    },
    {
      id: 'bai-26-28',
      number: 26,
      chapterId: 'chuong-7',
      volume: 2,
      title: 'Phép cộng, trừ, nhân, chia đa thức một biến',
      subtitle: 'Các phương pháp cộng trừ theo cột dọc / hàng ngang, nhân đơn thức với đa thức, nhân đa thức và chia đa thức',
      bookPage: 31,
      funFact: 'Quy tắc chia có dư: $A = B \\cdot Q + R$ với bậc của đa thức dư $R$ luôn nhỏ hơn bậc của đa thức chia $B$.',
      keyTheories: [
        {
          id: 'kt-26-1',
          title: 'Cộng và trừ hai đa thức một biến',
          badge: 'Quy tắc',
          content: 'Có 2 cách thực hiện:\n- Cách 1: Bỏ dấu ngoặc rồi nhóm các hạng tử cùng bậc.\n- Cách 2: Đặt tính cộng/trừ sao cho các hạng tử cùng bậc đặt thẳng cột với nhau.'
        },
        {
          id: 'kt-26-2',
          title: 'Nhân đa thức với đa thức',
          badge: 'Quy tắc nhân',
          content: 'Muốn nhân một đa thức với một đa thức, ta nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các tích với nhau.',
          formulaLatex: '(A + B)(C + D) = AC + AD + BC + BD'
        },
        {
          id: 'kt-26-3',
          title: 'Chia đa thức cho đa thức',
          badge: 'Phép chia',
          content: 'Khi chia đa thức $A$ cho đa thức $B$ ($B \\neq 0$), ta luôn tìm được duy nhất cặp đa thức thương $Q$ và dư $R$ sao cho:',
          formulaLatex: 'A = B \\cdot Q + R \\quad (R = 0 \\text{ hoặc } \\text{bậc}(R) < \\text{bậc}(B))',
          note: 'Nếu $R = 0$ ta có phép chia hết: $A : B = Q$.'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-26-1',
          code: '7.30a (SGK)',
          title: 'Chia hai đơn thức',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Kết quả của phép chia $8x^5 : 4x^3$ là:',
          options: [
            'A. $2x^2$',
            'B. $2x^8$',
            'C. $4x^2$',
            'D. $2x^{15}$'
          ],
          correctOption: 0,
          solution: '$8x^5 : 4x^3 = (8:4) \\cdot (x^5 : x^3) = 2x^{5-3} = 2x^2$.',
          hint: 'Chia hệ số cho hệ số, trừ số mũ của biến.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-26-1',
          front: 'Công thức tổng quát phép chia đa thức có dư?',
          back: 'A = B · Q + R (trong đó bậc của đa thức dư R luôn nhỏ hơn bậc của đa thức chia B).',
          tag: 'Công thức'
        }
      ]
    }
  ]
};

export const chapter8: Chapter = {
  id: 'chuong-8',
  volume: 2,
  number: 8,
  romanNumeral: 'Chương VIII',
  title: 'Làm Quen Với Biến Cố và Xác Suất',
  subtitle: 'Biến cố chắc chắn, không thể, ngẫu nhiên và xác suất của biến cố trong các trò chơi đơn giản',
  iconName: 'Dice5',
  color: 'teal',
  bgGradient: 'from-emerald-600 to-teal-800',
  lessons: [
    {
      id: 'bai-29-30',
      number: 29,
      chapterId: 'chuong-8',
      volume: 2,
      title: 'Biến cố và Xác suất của biến cố',
      subtitle: 'Phân loại 3 loại biến cố, xác suất từ 0 đến 1, biến cố đồng khả năng',
      bookPage: 47,
      funFact: 'Xác suất là một con số từ 0 đến 1 (hay từ 0% đến 100%) đo lường mức độ khả năng xảy ra của một sự kiện.',
      keyTheories: [
        {
          id: 'kt-29-1',
          title: 'Ba loại biến cố',
          badge: 'Khái niệm',
          content: '- **Biến cố chắc chắn**: Là biến cố biết trước luôn luôn xảy ra (Xác suất = 1 hay 100%).\n- **Biến cố không thể**: Là biến cố biết trước không bao giờ xảy ra (Xác suất = 0 hay 0%).\n- **Biến cố ngẫu nhiên**: Là biến cố không thể biết trước có xảy ra hay không (Xác suất nằm trong khoảng $0 < P < 1$).'
        },
        {
          id: 'kt-29-2',
          title: 'Xác suất của các biến cố đồng khả năng',
          badge: 'Công thức tính xác suất',
          content: 'Trong một trò chơi hay thí nghiệm, nếu có $k$ biến cố đồng khả năng và luôn xảy ra duy nhất một biến cố thì xác suất của mỗi biến cố đó bằng $\\frac{1}{k}$.',
          formulaLatex: 'P = \\frac{1}{k} \\qquad (\\text{Ví dụ gieo xúc xắc 6 mặt: } P(\\text{ra mặt 6}) = \\frac{1}{6})'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-29-1',
          code: '8.1 (SGK)',
          title: 'Nhận diện loại biến cố',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Một túi đựng 5 viên bi trắng và 5 viên bi đen. Lấy ngẫu nhiên 1 viên bi. Biến cố "Lấy được viên bi màu đỏ" là:',
          options: [
            'A. Biến cố ngẫu nhiên',
            'B. Biến cố chắc chắn',
            'C. Biến cố không thể',
            'D. Biến cố đồng khả năng'
          ],
          correctOption: 2,
          solution: 'Trong túi chỉ có bi trắng và đen, không có bi đỏ nên việc lấy được bi đỏ là biến cố không thể (xác suất = 0).',
          hint: 'Trong túi không hề có bi màu đỏ.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-29-1',
          front: 'Xác suất của biến cố chắc chắn và biến cố không thể?',
          back: 'Biến cố chắc chắn có xác suất bằng 1 (100%). Biến cố không thể có xác suất bằng 0 (0%).',
          tag: 'Định nghĩa'
        }
      ]
    }
  ]
};

export const chapter9: Chapter = {
  id: 'chuong-9',
  volume: 2,
  number: 9,
  romanNumeral: 'Chương IX',
  title: 'Quan Hệ Giữa Các Yếu Tố Trong Một Tam Giác',
  subtitle: 'Quan hệ góc - cạnh đối diện, đường vuông góc - đường xiên, bất đẳng thức tam giác và 4 đường đồng quy',
  iconName: 'Compass',
  color: 'teal',
  bgGradient: 'from-cyan-700 to-teal-900',
  lessons: [
    {
      id: 'bai-31',
      number: 31,
      chapterId: 'chuong-9',
      volume: 2,
      title: 'Quan hệ giữa góc và cạnh đối diện trong một tam giác',
      subtitle: 'Trong tam giác: Góc đối diện với cạnh lớn hơn là góc lớn hơn và ngược lại',
      bookPage: 59,
      funFact: 'Trong tam giác tù (hoặc vuông), góc tù (hoặc góc vuông) là góc lớn nhất nên cạnh đối diện luôn là cạnh lớn nhất.',
      keyTheories: [
        {
          id: 'kt-31-1',
          title: 'Định lí 1: Góc đối diện với cạnh lớn hơn',
          badge: 'Định lí',
          content: 'Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn.',
          formulaLatex: '\\text{Trong } \\Delta ABC: \\quad AC > AB \\implies \\widehat{B} > \\widehat{C}'
        },
        {
          id: 'kt-31-2',
          title: 'Định lí 2: Cạnh đối diện với góc lớn hơn',
          badge: 'Định lí đảo',
          content: 'Trong một tam giác, cạnh đối diện với góc lớn hơn là cạnh lớn hơn.',
          formulaLatex: '\\text{Trong } \\Delta ABC: \\quad \\widehat{B} > \\widehat{C} \\implies AC > AB'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-31-1',
          code: '9.1 (SGK)',
          title: 'Tìm cạnh lớn nhất trong tam giác',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Cho tam giác $ABC$ có $\\widehat{A} = 105^\\circ, \\widehat{B} = 35^\\circ$. Cạnh lớn nhất của tam giác $ABC$ là:',
          options: [
            'A. Cạnh AB',
            'B. Cạnh AC',
            'C. Cạnh BC',
            'D. Không xác định được'
          ],
          correctOption: 2,
          solution: 'Góc $\\widehat{A} = 105^\\circ > 90^\\circ$ là góc tù (góc lớn nhất trong tam giác), do đó cạnh đối diện với góc A là cạnh BC lớn nhất.',
          hint: 'Cạnh đối diện với góc lớn nhất là cạnh lớn nhất.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-31-1',
          front: 'Quan hệ giữa góc và cạnh đối diện trong tam giác?',
          back: 'Trong một tam giác: Cạnh lớn hơn đối diện góc lớn hơn; Góc lớn hơn đối diện cạnh lớn hơn.',
          tag: 'Định lí'
        }
      ]
    },
    {
      id: 'bai-33',
      number: 33,
      chapterId: 'chuong-9',
      volume: 2,
      title: 'Quan hệ giữa ba cạnh của một tam giác. Bất đẳng thức tam giác',
      subtitle: 'Bất đẳng thức tam giác: Độ dài một cạnh luôn nhỏ hơn tổng và lớn hơn hiệu hai cạnh còn lại',
      bookPage: 66,
      funFact: 'Không phải cứ 3 đoạn thẳng bất kì là ghép lại thành tam giác được đâu nhé!',
      keyTheories: [
        {
          id: 'kt-33-1',
          title: 'Bất đẳng thức tam giác',
          badge: 'Định lí cốt lõi',
          content: 'Trong một tam giác, độ dài của một cạnh bất kì luôn nhỏ hơn tổng độ dài hai cạnh còn lại và lớn hơn hiệu độ dài hai cạnh còn lại.',
          formulaLatex: '|b - c| < a < b + c \\qquad (\\text{với } a, b, c \\text{ là độ dài 3 cạnh})',
          highlight: 'Mẹo kiểm tra: Chỉ cần so sánh cạnh dài nhất với tổng hai cạnh còn lại (dài nhất < tổng 2 cạnh ngắn).'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-33-1',
          code: '9.10 (SGK)',
          title: 'Kiểm tra bộ ba đoạn thẳng có tạo thành tam giác',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Bộ ba đoạn thẳng có độ dài nào sau đây KHÔNG THỂ tạo thành một tam giác?',
          options: [
            'A. $2\\text{ cm}, 3\\text{ cm}, 4\\text{ cm}$',
            'B. $3\\text{ cm}, 4\\text{ cm}, 6\\text{ cm}$',
            'C. $2\\text{ cm}, 3\\text{ cm}, 5\\text{ cm}$',
            'D. $5\\text{ cm}, 6\\text{ cm}, 7\\text{ cm}$'
          ],
          correctOption: 2,
          solution: 'Ở câu C: $2 + 3 = 5$ (tổng hai cạnh bằng cạnh thứ ba, không thoả mãn $a + b > c$), nên không thể tạo thành tam giác.',
          hint: 'Kiểm tra xem tổng 2 cạnh nhỏ có lớn hơn cạnh lớn nhất không.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-33-1',
          front: 'Điều kiện để 3 số a, b, c là độ dài 3 cạnh tam giác?',
          back: '|b - c| < a < b + c (Tổng 2 cạnh bất kì luôn lớn hơn cạnh còn lại).',
          tag: 'Bất đẳng thức'
        }
      ]
    },
    {
      id: 'bai-34-35',
      number: 34,
      chapterId: 'chuong-9',
      volume: 2,
      title: 'Sự đồng quy của các đường trong tam giác',
      subtitle: 'Trọng tâm (3 đường trung tuyến), Trực tâm (3 đường cao), Tâm đường tròn nội tiếp (3 phân giác), Tâm đường tròn ngoại tiếp (3 trung trực)',
      bookPage: 72,
      funFact: 'Trọng tâm G là điểm cân bằng trọng lượng của một miếng bìa hình tam giác!',
      keyTheories: [
        {
          id: 'kt-34-1',
          title: '1. Ba đường trung tuyến - Trọng tâm G',
          badge: 'Trọng tâm',
          content: 'Ba đường trung tuyến của một tam giác cùng đi qua một điểm (gọi là trọng tâm $G$). Điểm $G$ cách mỗi đỉnh một khoảng bằng $\\frac{2}{3}$ độ dài đường trung tuyến đi qua đỉnh ấy.',
          formulaLatex: '\\frac{GA}{AM} = \\frac{GB}{BN} = \\frac{GC}{CP} = \\frac{2}{3}; \\qquad GA = 2GM'
        },
        {
          id: 'kt-34-2',
          title: '2. Ba đường phân giác - Tâm đường tròn nội tiếp I',
          badge: 'Tâm nội tiếp',
          content: 'Ba đường phân giác của một tam giác cùng đi qua một điểm. Điểm này cách đều ba cạnh của tam giác (tâm đường tròn nội tiếp).'
        },
        {
          id: 'kt-34-3',
          title: '3. Ba đường trung trực - Tâm đường tròn ngoại tiếp O',
          badge: 'Tâm ngoại tiếp',
          content: 'Ba đường trung trực của tam giác đồng quy tại một điểm. Điểm này cách đều ba đỉnh của tam giác ($OA = OB = OC$).'
        },
        {
          id: 'kt-34-4',
          title: '4. Ba đường cao - Trực tâm H',
          badge: 'Trực tâm',
          content: 'Ba đường cao của một tam giác cùng đi qua một điểm (gọi là trực tâm $H$ của tam giác).'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-34-1',
          code: '9.20 (SGK)',
          title: 'Tỉ số khoảng cách trọng tâm',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Cho tam giác $ABC$ có $AM$ là trung tuyến và $G$ là trọng tâm. Tỉ số $\\frac{GA}{AM}$ bằng:',
          options: [
            'A. $\\frac{1}{2}$',
            'B. $\\frac{2}{3}$',
            'C. $\\frac{1}{3}$',
            'D. $2$'
          ],
          correctOption: 1,
          solution: 'Theo tính chất ba đường trung tuyến, trọng tâm G cách đỉnh một khoảng bằng $\\frac{2}{3}$ độ dài đường trung tuyến.',
          hint: 'GA chiếm 2 phần, GM chiếm 1 phần, AM chiếm 3 phần.'
        }
      ],
      commonMistakes: [
        'Nhầm lẫn vị trí của Trực tâm (3 đường cao) và Trọng tâm (3 đường trung tuyến).'
      ],
      flashcards: [
        {
          id: 'fc-34-1',
          front: '4 điểm đồng quy đặc biệt trong tam giác là gì?',
          back: '1) Trọng tâm G: giao 3 trung tuyến (cách đỉnh 2/3).\n2) Trực tâm H: giao 3 đường cao.\n3) Tâm ngoại tiếp O: giao 3 trung trực (cách đều 3 đỉnh).\n4) Tâm nội tiếp I: giao 3 phân giác (cách đều 3 cạnh).',
          tag: 'Tổng hợp 4 điểm'
        }
      ]
    }
  ]
};

export const chapter10: Chapter = {
  id: 'chuong-10',
  volume: 2,
  number: 10,
  romanNumeral: 'Chương X',
  title: 'Một Số Hình Khối Trong Thực Tiễn',
  subtitle: 'Hình hộp chữ nhật, hình lập phương, hình lăng trụ đứng tam giác và tứ giác',
  iconName: 'Box',
  color: 'teal',
  bgGradient: 'from-teal-700 to-slate-900',
  lessons: [
    {
      id: 'bai-36',
      number: 36,
      chapterId: 'chuong-10',
      volume: 2,
      title: 'Hình hộp chữ nhật và hình lập phương',
      subtitle: 'Đỉnh, cạnh, mặt, đường chéo, công thức diện tích xung quanh, toàn phần và thể tích',
      bookPage: 85,
      funFact: 'Một khối Rubik 3x3 chính là một hình lập phương tuyệt đẹp cấu thành từ 27 khối lập phương nhỏ!',
      keyTheories: [
        {
          id: 'kt-36-1',
          title: 'Hình hộp chữ nhật',
          badge: 'Công thức cốt lõi',
          content: 'Hình hộp chữ nhật có 8 đỉnh, 12 cạnh, 6 mặt là hình chữ nhật, 4 đường chéo.',
          formulaLatex: 'S_{xq} = 2(a + b)c; \\qquad S_{tp} = S_{xq} + 2ab; \\qquad V = abc',
          diagramType: 'box3d'
        },
        {
          id: 'kt-36-2',
          title: 'Hình lập phương',
          badge: 'Trường hợp đặc biệt (a=b=c)',
          content: 'Hình lập phương có 6 mặt là các hình vuông bằng nhau.',
          formulaLatex: 'S_{xq} = 4a^2; \\qquad S_{tp} = 6a^2; \\qquad V = a^3'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-36-1',
          name: 'Ví dụ 2 (SGK Trang 89) - Thể tích hộp sữa',
          problem: 'Tính thể tích hộp sữa có dạng hình hộp chữ nhật kích thước đáy $10\\text{ cm} \\times 10\\text{ cm}$ và chiều cao $15\\text{ cm}$.',
          solution: 'Áp dụng công thức thể tích $V = abc$.',
          steps: [
            { step: 1, title: 'Áp dụng công thức', math: 'V = 10 \\cdot 10 \\cdot 15 = 1500\\text{ cm}^3', explanation: 'Nhân ba kích thước dài, rộng, cao.' },
            { step: 2, title: 'Đổi đơn vị nếu cần', math: '1500\\text{ cm}^3 = 1,5\\text{ lít}', explanation: 'Vì 1000 cm3 = 1 dm3 = 1 lít.' }
          ],
          tips: 'Cùng đơn vị đo trước khi nhân.'
        }
      ],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-36-1',
          code: '10.4 (SGK)',
          title: 'Thể tích thùng xe đông lạnh',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Một xe đông lạnh có thùng hàng dạng hình hộp chữ nhật dài $5,6\\text{ m}$, rộng $2\\text{ m}$, cao $2\\text{ m}$. Thể tích thùng hàng là:',
          options: [
            'A. $22,4\\text{ m}^3$',
            'B. $11,2\\text{ m}^3$',
            'C. $9,6\\text{ m}^3$',
            'D. $20\\text{ m}^3$'
          ],
          correctOption: 0,
          solution: '$V = 5,6 \\cdot 2 \\cdot 2 = 22,4\\text{ m}^3$.',
          hint: 'V = dài * rộng * cao.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-36-1',
          front: 'Thể tích hình hộp chữ nhật và hình lập phương?',
          back: 'Hình hộp chữ nhật: V = a · b · c.\nHình lập phương cạnh a: V = a³.',
          tag: 'Công thức'
        }
      ]
    },
    {
      id: 'bai-37',
      number: 37,
      chapterId: 'chuong-10',
      volume: 2,
      title: 'Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác',
      subtitle: 'Cấu tạo lăng trụ đứng, diện tích xung quanh bằng chu vi đáy nhân chiều cao, thể tích bằng diện tích đáy nhân chiều cao',
      bookPage: 94,
      funFact: 'Lịch để bàn, thanh sô-cô-la Toblerone hay lều cắm trại chữ A là những hình ảnh quen thuộc của hình lăng trụ đứng tam giác trong đời sống!',
      keyTheories: [
        {
          id: 'kt-37-1',
          title: 'Đặc điểm của hình lăng trụ đứng',
          badge: 'Cấu tạo',
          content: '- Hai mặt đáy song song và bằng nhau (là hình tam giác hoặc tứ giác).\n- Các mặt bên là những hình chữ nhật.\n- Các cạnh bên song song và bằng nhau. Chiều dài cạnh bên chính là chiều cao $h$ của lăng trụ.'
        },
        {
          id: 'kt-37-2',
          title: 'Diện tích xung quanh & Thể tích của lăng trụ đứng',
          badge: 'Công thức tổng quát',
          content: '- Diện tích xung quanh: bằng chu vi đáy nhân với chiều cao.\n- Thể tích: bằng diện tích đáy nhân với chiều cao.',
          formulaLatex: 'S_{xq} = C_{\\text{đáy}} \\cdot h; \\qquad V = S_{\\text{đáy}} \\cdot h'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-37-1',
          code: '10.13 (SGK)',
          title: 'Tính diện tích xung quanh lăng trụ đứng tam giác',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Một hình lăng trụ đứng tam giác có đáy là tam giác có ba cạnh là $6\\text{ cm}, 8\\text{ cm}, 10\\text{ cm}$ và chiều cao $15\\text{ cm}$. Diện tích xung quanh là:',
          options: [
            'A. $360\\text{ cm}^2$',
            'B. $180\\text{ cm}^2$',
            'C. $240\\text{ cm}^2$',
            'D. $720\\text{ cm}^2$'
          ],
          correctOption: 0,
          solution: 'Chu vi đáy: $C = 6 + 8 + 10 = 24\\text{ cm}$.\nDiện tích xung quanh: $S_{xq} = C \\cdot h = 24 \\cdot 15 = 360\\text{ cm}^2$.',
          hint: 'S_xq = Chu vi đáy * Chiều cao.'
        }
      ],
      commonMistakes: [
        'Nhầm lẫn giữa diện tích đáy và chu vi đáy khi tính diện tích xung quanh.'
      ],
      flashcards: [
        {
          id: 'fc-37-1',
          front: 'Công thức diện tích xung quanh và thể tích hình lăng trụ đứng?',
          back: 'S_xq = C_đáy · h (Chu vi đáy nhân chiều cao)\nV = S_đáy · h (Diện tích đáy nhân chiều cao)',
          tag: 'Công thức'
        }
      ]
    }
  ]
};
