import { Chapter } from '../types';

export const chapter1: Chapter = {
  id: 'chuong-1',
  volume: 1,
  number: 1,
  romanNumeral: 'Chương I',
  title: 'Số Hữu Tỉ',
  subtitle: 'Tập hợp Q, các phép tính, luỹ thừa, thứ tự thực hiện phép tính và quy tắc chuyển vế',
  iconName: 'Divide',
  color: 'teal',
  bgGradient: 'from-teal-500 to-emerald-600',
  lessons: [
    {
      id: 'bai-1',
      number: 1,
      chapterId: 'chuong-1',
      volume: 1,
      title: 'Tập hợp các số hữu tỉ',
      subtitle: 'Khái niệm số hữu tỉ, biểu diễn trên trục số và so sánh hai số hữu tỉ',
      bookPage: 5,
      funFact: 'Tập hợp số hữu tỉ được ký hiệu là Q, bắt nguồn từ chữ "Quotient" (thương số trong tiếng Anh/tiếng Pháp).',
      keyTheories: [
        {
          id: 'kt-1-1',
          title: 'Khái niệm Số Hữu Tỉ',
          badge: 'Định nghĩa trọng tâm',
          content: 'Số hữu tỉ là số viết được dưới dạng phân số $\\frac{a}{b}$ với $a, b \\in \\mathbb{Z},\\ b \\neq 0$.',
          formulaLatex: '\\mathbb{Q} = \\left\\{ \\frac{a}{b} \\;\\middle|\\; a, b \\in \\mathbb{Z},\\ b \\neq 0 \\right\\}',
          note: 'Mọi số nguyên, số thập phân hữu hạn hay hỗn số đều là số hữu tỉ vì đều viết được thành phân số.',
          highlight: 'Ví dụ: $-7 = \\frac{-7}{1}$; $0,6 = \\frac{6}{10} = \\frac{3}{5}$; $-1,2 = \\frac{-12}{10} = \\frac{-6}{5}$; $1\\frac{4}{5} = \\frac{9}{5}$.'
        },
        {
          id: 'kt-1-2',
          title: 'Số đối của số hữu tỉ',
          badge: 'Quy tắc',
          content: 'Mỗi số hữu tỉ đều có một số đối. Số đối của số hữu tỉ $\\frac{a}{b}$ là số hữu tỉ $-\\frac{a}{b}$.',
          formulaLatex: 'x + (-x) = 0 \\quad \\text{với } x \\in \\mathbb{Q}',
          note: 'Trên trục số, hai điểm biểu diễn hai số hữu tỉ đối nhau $a$ và $-a$ nằm về hai phía khác nhau so với điểm gốc $O$ và có cùng khoảng cách đến $O$.'
        },
        {
          id: 'kt-1-3',
          title: 'Biểu diễn số hữu tỉ trên trục số',
          badge: 'Hình học trực quan',
          content: 'Để biểu diễn $\\frac{a}{b}$ ($b > 0$), ta chia đoạn thẳng đơn vị thành $b$ phần bằng nhau, mỗi phần là đơn vị mới $\\frac{1}{b}$. Sau đó lấy $a$ đơn vị mới theo chiều dương (nếu $a>0$) hoặc chiều âm (nếu $a<0$).',
          diagramType: 'numberLine'
        },
        {
          id: 'kt-1-4',
          title: 'So sánh hai số hữu tỉ',
          badge: 'Phương pháp',
          content: 'Để so sánh hai số hữu tỉ $x$ và $y$ bất kì, ta viết chúng dưới dạng phân số có cùng mẫu dương rồi so sánh các tử số. Hoặc so sánh dạng số thập phân.',
          formulaLatex: '\\text{Nếu } a < b \\text{ thì trên trục số, điểm } a \\text{ nằm trước (bên trái) điểm } b.',
          note: 'Có thể áp dụng tính chất bắc cầu: nếu $a < b$ và $b < c$ thì $a < c$. Số 0 không là số hữu tỉ dương cũng không là số hữu tỉ âm.'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-1-1',
          name: 'Ví dụ 1 (SGK Trang 6) - Nhận biết số hữu tỉ',
          problem: 'Các số sau $-7;\\ 0,6;\\ -1,2;\\ 1\\frac{4}{5}$ có là số hữu tỉ không? Vì sao?',
          solution: 'Tất cả các số trên đều là số hữu tỉ vì viết được dưới dạng phân số với tử và mẫu thuộc Z, mẫu khác 0.',
          steps: [
            { step: 1, title: 'Chuyển đổi số nguyên', math: '-7 = \\frac{-7}{1}', explanation: 'Tử là -7, mẫu là 1 khác 0.' },
            { step: 2, title: 'Chuyển đổi số thập phân', math: '0,6 = \\frac{6}{10} = \\frac{3}{5}; \\quad -1,2 = \\frac{-12}{10} = \\frac{-6}{5}', explanation: 'Chuyển về phân số thập phân rồi rút gọn.' },
            { step: 3, title: 'Chuyển đổi hỗn số', math: '1\\frac{4}{5} = \\frac{1 \\cdot 5 + 4}{5} = \\frac{9}{5}', explanation: 'Nhân phần nguyên với mẫu rồi cộng tử số.' }
          ],
          tips: 'Gặp hỗn số hoặc số thập phân, chỉ cần đưa về phân số a/b là chứng minh được số hữu tỉ.'
        },
        {
          id: 'vd-1-2',
          name: 'Ví dụ 2 (SGK Trang 8) - So sánh hai số hữu tỉ',
          problem: 'So sánh $0,7$ và $\\frac{6}{5}$. Từ đó cho biết điểm $0,7$ nằm trước hay nằm sau điểm $\\frac{6}{5}$ trên trục số?',
          solution: 'Ta có $0,7 < \\frac{6}{5}$, do đó điểm $0,7$ nằm trước điểm $\\frac{6}{5}$ trên trục số.',
          steps: [
            { step: 1, title: 'Quy đồng phân số', math: '0,7 = \\frac{7}{10}; \\quad \\frac{6}{5} = \\frac{12}{10}', explanation: 'Đưa về mẫu chung là 10.' },
            { step: 2, title: 'So sánh tử số', math: '\\text{Vì } 7 < 12 \\implies \\frac{7}{10} < \\frac{12}{10} \\implies 0,7 < \\frac{6}{5}', explanation: 'Mẫu dương nên phân số nào có tử nhỏ hơn thì nhỏ hơn.' },
            { step: 3, title: 'Xác định vị trí trên trục số', math: '0,7 \\text{ nằm trước (bên trái) } \\frac{6}{5}', explanation: 'Số nhỏ hơn nằm trước số lớn hơn.' }
          ],
          tips: 'Cách khác: Có thể so sánh qua số trung gian $1$: vì $0,7 < 1$ và $1 < \\frac{6}{5}$ nên $0,7 < \\frac{6}{5}$.'
        }
      ],
      topicTypes: [
        {
          id: 'dang-1-1',
          title: 'Dạng 1: Nhận biết và biểu diễn số hữu tỉ',
          description: 'Xác định một số có thuộc tập hợp Q hay không, tìm số đối và viết nhiều phân số bằng nhau.',
          methods: [
            {
              name: 'Phương pháp giải',
              steps: [
                '1. Để kiểm tra số $x$ có là số hữu tỉ: Biến đổi $x$ về dạng $\\frac{a}{b}$ ($a, b \\in \\mathbb{Z}, b \\neq 0$).',
                '2. Tìm số đối của $x$: Đổi dấu của $x$ thành $-x$. Lưu ý số đối của 0 là 0.',
                '3. Viết phân số bằng nhau: Nhân cả tử và mẫu với cùng một số nguyên $k \\neq 0$.'
              ],
              example: {
                problem: 'Tìm số đối của $-0,75$ và $6\\frac{1}{5}$.',
                solution: 'Số đối của $-0,75$ là $0,75$ (hoặc $\\frac{3}{4}$). Số đối của $6\\frac{1}{5}$ là $-6\\frac{1}{5} = -\\frac{31}{5}$.'
              }
            }
          ],
          practiceExercises: []
        },
        {
          id: 'dang-1-2',
          title: 'Dạng 2: So sánh và sắp xếp thứ tự các số hữu tỉ',
          description: 'Sử dụng quy tắc so sánh qua phân số cùng mẫu, số thập phân hoặc số trung gian (0; 1; -1).',
          methods: [
            {
              name: 'Phương pháp giải',
              steps: [
                'Cách 1 (Quy đồng mẫu): Đưa về các phân số có cùng mẫu số dương rồi so sánh tử số.',
                'Cách 2 (Đưa về số thập phân): Phù hợp khi các số dễ chia ra số thập phân.',
                'Cách 3 (So sánh qua số trung gian): Dùng số 0 (số âm < 0 < số dương) hoặc so sánh với 1, -1.'
              ],
              example: {
                problem: 'Sắp xếp các số sau theo thứ tự từ bé đến lớn: $5\\frac{1}{4};\\ -2;\\ 3,125;\\ -\\frac{3}{2}$.',
                solution: 'Ta có các số âm: $-2 = -\\frac{4}{2} < -\\frac{3}{2} = -1,5$. Các số dương: $3,125 < 5,25 = 5\\frac{1}{4}$. Do đó thứ tự từ bé đến lớn là: $-2 < -\\frac{3}{2} < 3,125 < 5\\frac{1}{4}$.'
              }
            }
          ],
          practiceExercises: []
        }
      ],
      practiceExercises: [
        {
          id: 'bt-1-1',
          code: '1.1 (SGK)',
          title: 'Khẳng định về tập hợp số',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Trong các khẳng định sau, khẳng định nào đúng?',
          options: [
            'A. $0,25 \\notin \\mathbb{Q}$',
            'B. $-\\frac{6}{7} \\in \\mathbb{Q}$',
            'C. $-235 \\notin \\mathbb{Q}$',
            'D. $\\frac{5}{0} \\in \\mathbb{Q}$'
          ],
          correctOption: 1,
          solution: 'Khẳng định đúng là B vì $-\\frac{6}{7}$ có tử $-6 \\in \\mathbb{Z}$ và mẫu $7 \\in \\mathbb{Z}, 7 \\neq 0$, nên $-\\frac{6}{7} \\in \\mathbb{Q}$.',
          hint: 'Số hữu tỉ là số viết được dưới dạng a/b với a, b thuộc Z, b khác 0.'
        },
        {
          id: 'bt-1-5',
          code: '1.5 (SGK)',
          title: 'So sánh hai số hữu tỉ âm',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'So sánh hai số hữu tỉ $-2,5$ và $-2,125$:',
          options: [
            'A. $-2,5 > -2,125$',
            'B. $-2,5 = -2,125$',
            'C. $-2,5 < -2,125$',
            'D. Không so sánh được'
          ],
          correctOption: 2,
          solution: 'Vì $2,5 > 2,125$ nên khi lấy số đối ta có $-2,5 < -2,125$.',
          hint: 'Với hai số âm, số nào có giá trị tuyệt đối lớn hơn thì số đó nhỏ hơn.'
        },
        {
          id: 'bt-1-4',
          code: '1.4 (SGK)',
          title: 'Phân số biểu diễn số hữu tỉ -0,625',
          level: 'Thông hiểu',
          type: 'tu_luan',
          problem: 'Trong các phân số sau: $\\frac{5}{-8},\\ \\frac{10}{16},\\ \\frac{20}{-32},\\ \\frac{-10}{16},\\ \\frac{-25}{40},\\ \\frac{35}{-48}$, những phân số nào biểu diễn số hữu tỉ $-0,625$?',
          solution: 'Ta có $-0,625 = -\\frac{625}{1000} = -\\frac{5}{8} = \\frac{-5}{8} = \\frac{5}{-8}$.\n- $\\frac{5}{-8} = -0,625$ (Đúng)\n- $\\frac{10}{16} = \\frac{5}{8} = 0,625 \\neq -0,625$\n- $\\frac{20}{-32} = -\\frac{5}{8} = -0,625$ (Đúng)\n- $\\frac{-10}{16} = -\\frac{5}{8} = -0,625$ (Đúng)\n- $\\frac{-25}{40} = -\\frac{5}{8} = -0,625$ (Đúng)\n- $\\frac{35}{-48}$ không rút gọn về $-5/8$.\nVậy các phân số biểu diễn $-0,625$ là: $\\frac{5}{-8},\\ \\frac{20}{-32},\\ \\frac{-10}{16},\\ \\frac{-25}{40}$.'
        }
      ],
      commonMistakes: [
        'Nhầm lẫn giữa số 0 với số hữu tỉ dương hoặc âm (số 0 là số hữu tỉ nhưng không dương và không âm).',
        'Quên đổi dấu khi tìm số đối của số âm: Số đối của -a là a.',
        'So sánh hai số âm bị ngược dấu (Ví dụ: -5 < -3 chứ không phải -5 > -3).'
      ],
      flashcards: [
        {
          id: 'fc-1-1',
          front: 'Số hữu tỉ là gì?',
          back: 'Là số viết được dưới dạng phân số a/b với a, b ∈ Z, b ≠ 0. Kí hiệu tập hợp là Q.',
          tag: 'Định nghĩa'
        },
        {
          id: 'fc-1-2',
          front: 'Số đối của x là gì?',
          back: 'Là số -x sao cho x + (-x) = 0. Trên trục số, hai số đối nhau cách đều gốc O.',
          tag: 'Tính chất'
        }
      ]
    },
    {
      id: 'bai-2',
      number: 2,
      chapterId: 'chuong-1',
      volume: 1,
      title: 'Cộng, trừ, nhân, chia số hữu tỉ',
      subtitle: 'Quy tắc 4 phép tính, tính chất giao hoán, kết hợp, phân phối và quy tắc dấu ngoặc',
      bookPage: 10,
      funFact: 'Phép chia cho phân số chính là phép nhân với phân số nghịch đảo.',
      keyTheories: [
        {
          id: 'kt-2-1',
          title: 'Cộng và trừ hai số hữu tỉ',
          badge: 'Quy tắc',
          content: 'Ta viết hai số hữu tỉ dưới dạng phân số có cùng mẫu dương rồi áp dụng quy tắc cộng, trừ phân số.',
          formulaLatex: '\\frac{a}{m} + \\frac{b}{m} = \\frac{a + b}{m}; \\quad \\frac{a}{m} - \\frac{b}{m} = \\frac{a - b}{m} \\quad (m > 0)',
          note: 'Nếu hai số hữu tỉ ở dạng số thập phân, ta áp dụng quy tắc cộng trừ số thập phân như ở lớp 6.'
        },
        {
          id: 'kt-2-2',
          title: 'Tính chất của phép cộng số hữu tỉ',
          badge: 'Tính chất',
          content: 'Phép cộng có tính chất giao hoán, kết hợp, cộng với số 0 và cộng với số đối.',
          formulaLatex: 'x + y = y + x; \\quad (x + y) + z = x + (y + z); \\quad x + 0 = x; \\quad x + (-x) = 0',
          note: 'Tính chất này giúp ta nhóm các số hạng hợp lí để tính nhanh!'
        },
        {
          id: 'kt-2-3',
          title: 'Quy tắc dấu ngoặc',
          badge: 'Quy tắc cốt lõi',
          content: 'Khi bỏ dấu ngoặc có dấu "+" đằng trước, ta giữ nguyên dấu các số hạng. Khi bỏ dấu ngoặc có dấu "-" đằng trước, ta phải đổi dấu tất cả các số hạng trong ngoặc.',
          formulaLatex: '+(a - b + c) = a - b + c; \\qquad -(a - b + c) = -a + b - c',
          highlight: 'Đổi dấu: "+" thành "-", "-" thành "+".'
        },
        {
          id: 'kt-2-4',
          title: 'Nhân và chia hai số hữu tỉ',
          badge: 'Quy tắc',
          content: 'Muốn nhân hai phân số, ta nhân tử với tử và mẫu với mẫu. Muốn chia cho một số hữu tỉ khác 0, ta nhân với số nghịch đảo của nó.',
          formulaLatex: '\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}; \\qquad \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c} \\quad (c, d \\neq 0)',
          note: 'Tính chất phân phối của phép nhân đối với phép cộng: $x(y + z) = xy + xz$.'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-2-1',
          name: 'Ví dụ 1 (SGK Trang 10) - Tính hợp lí biểu thức',
          problem: 'Tính: $A = \\frac{2}{-3} + 2,5 + \\frac{1}{3} + 1\\frac{1}{2}$',
          solution: 'Đưa các số về phân số và nhóm hợp lí các phân số cùng mẫu.',
          steps: [
            { step: 1, title: 'Viết số hữu tỉ dưới dạng phân số mẫu dương', math: 'A = \\frac{-2}{3} + \\frac{5}{2} + \\frac{1}{3} + \\frac{3}{2}', explanation: '2,5 = 5/2 và hỗn số 1 1/2 = 3/2.' },
            { step: 2, title: 'Áp dụng tính chất giao hoán và kết hợp', math: 'A = \\left(\\frac{-2}{3} + \\frac{1}{3}\\right) + \\left(\\frac{5}{2} + \\frac{3}{2}\\right)', explanation: 'Nhóm các phân số có cùng mẫu lại với nhau.' },
            { step: 3, title: 'Thực hiện phép tính trong ngoặc', math: 'A = \\frac{-1}{3} + \\frac{8}{2} = \\frac{-1}{3} + 4 = \\frac{11}{3}', explanation: 'Quy đồng: -1/3 + 12/3 = 11/3.' }
          ],
          tips: 'Luôn tìm các phân số có mẫu giống nhau hoặc cộng lại ra số nguyên tròn đẹp để nhóm trước.'
        }
      ],
      topicTypes: [
        {
          id: 'dang-2-1',
          title: 'Dạng 1: Thực hiện phép tính cộng, trừ, nhân, chia',
          description: 'Tính giá trị biểu thức theo đúng thứ tự ưu tiên hoặc tính nhanh bằng tính chất.',
          methods: [
            {
              name: 'Phương pháp giải',
              steps: [
                '1. Đưa số thập phân, hỗn số về phân số tối giản.',
                '2. Quan sát tìm các cặp số hạng đối nhau hoặc có cùng mẫu số để nhóm lại.',
                '3. Sử dụng tính chất phân phối $A \\cdot B + A \\cdot C = A(B + C)$ để đặt thừa số chung.'
              ],
              example: {
                problem: 'Tính hợp lí: $B = \\frac{7}{6} \\cdot \\left(-3\\frac{1}{4}\\right) + \\frac{7}{6} \\cdot (-0,25)$',
                solution: 'Đặt thừa số chung $\\frac{7}{6}$: $B = \\frac{7}{6} \\cdot \\left(-\\frac{13}{4} - \\frac{1}{4}\\right) = \\frac{7}{6} \\cdot \\left(-\\frac{14}{4}\\right) = \\frac{7}{6} \\cdot \\left(-\\frac{7}{2}\\right) = -\\frac{49}{12}$.'
              }
            }
          ],
          practiceExercises: []
        }
      ],
      practiceExercises: [
        {
          id: 'bt-2-7',
          code: '1.7 (SGK)',
          title: 'Tính phép cộng trừ phân số',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Kết quả của phép tính $\\frac{-6}{18} + \\frac{18}{27}$ là:',
          options: [
            'A. $\\frac{1}{3}$',
            'B. $-\\frac{1}{3}$',
            'C. $1$',
            'D. $\\frac{2}{3}$'
          ],
          correctOption: 0,
          solution: 'Rút gọn: $\\frac{-6}{18} = -\\frac{1}{3}$; $\\frac{18}{27} = \\frac{2}{3}$. Do đó: $-\\frac{1}{3} + \\frac{2}{3} = \\frac{1}{3}$.',
          hint: 'Rút gọn các phân số về dạng tối giản trước khi cộng.'
        },
        {
          id: 'bt-2-10',
          code: '1.10 (SGK)',
          title: 'Tính nhanh với thừa số chung',
          level: 'Vận dụng',
          type: 'tu_luan',
          problem: 'Tính một cách hợp lí: $0,65 \\cdot 78 + 2\\frac{1}{5} \\cdot 2020 + 0,35 \\cdot 78 - 2,2 \\cdot 2020$',
          solution: 'Ta nhóm các số hạng có thừa số chung:\n$= (0,65 \\cdot 78 + 0,35 \\cdot 78) + (2,2 \\cdot 2020 - 2,2 \\cdot 2020)$\n$= 78 \\cdot (0,65 + 0,35) + 2,2 \\cdot (2020 - 2020)$\n$= 78 \\cdot 1 + 2,2 \\cdot 0 = 78 + 0 = 78$.'
        }
      ],
      commonMistakes: [
        'Quên đổi dấu khi phá ngoặc có dấu trừ đằng trước: $-(a - b) = -a + b$ chứ không phải $-a - b$.',
        'Cộng hai phân số khác mẫu mà không quy đồng mẫu số.'
      ],
      flashcards: [
        {
          id: 'fc-2-1',
          front: 'Quy tắc phá dấu ngoặc có dấu "-" đằng trước?',
          back: 'Phải đổi dấu tất cả các số hạng bên trong ngoặc: dấu "+" thành "-", dấu "-" thành "+". -(a - b + c) = -a + b - c',
          tag: 'Quy tắc'
        },
        {
          id: 'fc-2-2',
          front: 'Phép nhân phân phối đối với phép cộng?',
          back: 'A · (B + C) = A · B + A · C và ngược lại A · B + A · C = A · (B + C)',
          tag: 'Tính chất'
        }
      ]
    },
    {
      id: 'bai-3',
      number: 3,
      chapterId: 'chuong-1',
      volume: 1,
      title: 'Luỹ thừa với số mũ tự nhiên của một số hữu tỉ',
      subtitle: 'Định nghĩa luỹ thừa, tích và thương hai luỹ thừa cùng cơ số, luỹ thừa của luỹ thừa, luỹ thừa của một tích và thương',
      bookPage: 16,
      funFact: 'Quy ước quan trọng: $x^0 = 1$ với mọi $x \\neq 0$ và $x^1 = x$.',
      keyTheories: [
        {
          id: 'kt-3-1',
          title: 'Định nghĩa luỹ thừa bậc n',
          badge: 'Định nghĩa',
          content: 'Luỹ thừa bậc $n$ của số hữu tỉ $x$ (kí hiệu $x^n$) là tích của $n$ thừa số $x$ ($n \\in \\mathbb{N}, n > 1$).',
          formulaLatex: 'x^n = \\underbrace{x \\cdot x \\cdots x}_{n \\text{ thừa số}} \\quad (x \\in \\mathbb{Q}, n \\in \\mathbb{N}, n > 1)',
          note: 'Quy ước: $x^0 = 1$ ($x \\neq 0$); $x^1 = x$. Khi viết số hữu tỉ dạng $\\frac{a}{b}$ thì: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$.'
        },
        {
          id: 'kt-3-2',
          title: 'Tích và thương hai luỹ thừa cùng cơ số',
          badge: 'Công thức vàng',
          content: 'Khi nhân hai luỹ thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ. Khi chia hai luỹ thừa cùng cơ số khác 0, ta giữ nguyên cơ số và trừ các số mũ.',
          formulaLatex: 'x^m \\cdot x^n = x^{m+n}; \\qquad x^m : x^n = x^{m-n} \\quad (x \\neq 0, m \\ge n)',
          highlight: 'Cùng cơ số: Nhân thì CỘNG mũ, Chia thì TRỪ mũ.'
        },
        {
          id: 'kt-3-3',
          title: 'Luỹ thừa của luỹ thừa & Luỹ thừa của một tích/thương',
          badge: 'Công thức mở rộng',
          content: 'Khi tính luỹ thừa của một luỹ thừa, ta giữ nguyên cơ số và nhân hai số mũ.',
          formulaLatex: '(x^m)^n = x^{m \\cdot n}; \\qquad (x \\cdot y)^n = x^n \\cdot y^n; \\qquad \\left(\\frac{x}{y}\\right)^n = \\frac{x^n}{y^n} \\quad (y \\neq 0)'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-3-1',
          name: 'Ví dụ 2 (SGK Trang 17) - Tính tích luỹ thừa',
          problem: 'Tính: $a) \\left(\\frac{1}{5}\\right)^2 \\cdot 5^2; \\quad b) \\frac{(-14)^2}{7^2}$',
          solution: 'Sử dụng công thức luỹ thừa của một tích và luỹ thừa của một thương.',
          steps: [
            { step: 1, title: 'Câu a - Đưa về luỹ thừa của một tích', math: '\\left(\\frac{1}{5}\\right)^2 \\cdot 5^2 = \\left(\\frac{1}{5} \\cdot 5\\right)^2 = 1^2 = 1', explanation: 'Áp dụng x^n · y^n = (x · y)^n.' },
            { step: 2, title: 'Câu b - Đưa về luỹ thừa của một thương', math: '\\frac{(-14)^2}{7^2} = \\left(\\frac{-14}{7}\\right)^2 = (-2)^2 = 4', explanation: 'Áp dụng x^n / y^n = (x / y)^n.' }
          ],
          tips: 'Cùng số mũ: gộp các cơ số lại rồi tính số mũ sau.'
        }
      ],
      topicTypes: [
        {
          id: 'dang-3-1',
          title: 'Dạng 1: Rút gọn và tính giá trị biểu thức chứa luỹ thừa',
          description: 'Đưa các cơ số về dạng số nguyên tố ($2, 3, 5,...$) để áp dụng các công thức nhân chia luỹ thừa cùng cơ số.',
          methods: [
            {
              name: 'Phương pháp giải',
              steps: [
                '1. Phân tích các cơ số hợp số ra thừa số nguyên tố.',
                '2. Áp dụng $(a^m)^n = a^{m \\cdot n}$ và $(a \\cdot b)^n = a^n \\cdot b^n$.',
                '3. Gom các luỹ thừa cùng cơ số ở tử và mẫu rồi rút gọn.'
              ],
              example: {
                problem: 'Tính giá trị biểu thức: $A = \\frac{3^{12} + 3^{15}}{1 + 3^3}$ (Bài 1.36 SGK)',
                solution: 'Đặt $3^{12}$ làm nhân tử chung ở tử số: $A = \\frac{3^{12}(1 + 3^3)}{1 + 3^3} = 3^{12}$.'
              }
            }
          ],
          practiceExercises: []
        }
      ],
      practiceExercises: [
        {
          id: 'bt-3-1',
          code: '1.18 (SGK)',
          title: 'Viết số dưới dạng luỹ thừa',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Số 125 và 3125 được viết dưới dạng luỹ thừa của 5 lần lượt là:',
          options: [
            'A. $5^2$ và $5^4$',
            'B. $5^3$ và $5^5$',
            'C. $5^3$ và $5^6$',
            'D. $5^4$ và $5^5$'
          ],
          correctOption: 1,
          solution: '$125 = 5 \\cdot 5 \\cdot 5 = 5^3$; $3125 = 5^5$.',
          hint: '125 chia hết cho 5 ba lần liên tiếp.'
        },
        {
          id: 'bt-3-2',
          code: '1.22 (SGK)',
          title: 'Viết biểu thức dưới dạng luỹ thừa',
          level: 'Thông hiểu',
          type: 'tu_luan',
          problem: 'Viết các biểu thức sau dưới dạng luỹ thừa của một số hữu tỉ:\na) $15^8 \\cdot 2^4$; \\quad b) $27^5 : 32^3$',
          solution: 'a) $15^8 \\cdot 2^4 = (15^2)^4 \\cdot 2^4 = (225)^4 \\cdot 2^4 = (225 \\cdot 2)^4 = 450^4$.\nHoặc $15^8 \\cdot 2^4 = 3^8 \\cdot 5^8 \\cdot 2^4 = 3^8 \\cdot 5^8 \\cdot 16 = ...$\nb) $27^5 : 32^3 = (3^3)^5 : (2^5)^3 = 3^{15} : 2^{15} = \\left(\\frac{3}{2}\\right)^{15}$.'
        }
      ],
      commonMistakes: [
        'Nhầm lẫn giữa luỹ thừa của luỹ thừa $(x^m)^n = x^{m \\cdot n}$ với $x^{m+n}$.',
        'Nhầm dấu của luỹ thừa cơ số âm với số mũ chẵn/lẻ: $(-a)^{\\text{chẵn}} > 0$ và $(-a)^{\\text{lẻ}} < 0$.'
      ],
      flashcards: [
        {
          id: 'fc-3-1',
          front: 'Công thức luỹ thừa của luỹ thừa: (x^m)^n = ?',
          back: '(x^m)^n = x^{m · n} (giữ nguyên cơ số, nhân hai số mũ).',
          tag: 'Công thức'
        },
        {
          id: 'fc-3-2',
          front: 'x^0 bằng bao nhiêu?',
          back: 'x^0 = 1 với mọi x ≠ 0.',
          tag: 'Quy ước'
        }
      ]
    },
    {
      id: 'bai-4',
      number: 4,
      chapterId: 'chuong-1',
      volume: 1,
      title: 'Thứ tự thực hiện các phép tính. Quy tắc chuyển vế',
      subtitle: 'Thứ tự ưu tiên ngoặc và phép toán, định nghĩa đẳng thức và quy tắc chuyển vế đổi dấu trong tìm x',
      bookPage: 20,
      funFact: 'Quy tắc chuyển vế là nền tảng cốt lõi cho mọi bài toán tìm x và giải phương trình đại số sau này.',
      keyTheories: [
        {
          id: 'kt-4-1',
          title: 'Thứ tự thực hiện các phép tính',
          badge: 'Quy tắc ưu tiên',
          content: 'Thứ tự thực hiện các phép tính đối với số hữu tỉ giống như đối với số tự nhiên.',
          formulaLatex: '\\text{Ngoặc: } (\\quad) \\longrightarrow [\\quad] \\longrightarrow \\{\\quad\\} \\\\ \\text{Phép toán: } \\text{Luỹ thừa} \\longrightarrow \\text{Nhân và chia} \\longrightarrow \\text{Cộng và trừ}',
          note: 'Với biểu thức chỉ có phép cộng, trừ hoặc chỉ có nhân, chia thì thực hiện từ trái sang phải.'
        },
        {
          id: 'kt-4-2',
          title: 'Quy tắc chuyển vế',
          badge: 'Quy tắc vàng tìm x',
          content: 'Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó: dấu "+" đổi thành dấu "-" và dấu "-" đổi thành dấu "+".',
          formulaLatex: 'A + B = C \\implies A = C - B; \\qquad A - B = C \\implies A = C + B',
          highlight: 'Nhớ câu thần chú: "Chuyển vế thì ĐỔI DẤU!"'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-4-1',
          name: 'Ví dụ 3 (SGK Trang 21) - Tìm x bằng quy tắc chuyển vế',
          problem: 'Tìm x, biết: a) $x + \\frac{1}{2} = -\\frac{6}{7}$; \\quad b) $x - \\frac{3}{4} = \\frac{9}{8}$',
          solution: 'Chuyển các phân số tự do sang vế phải và đổi dấu.',
          steps: [
            { step: 1, title: 'Câu a: Chuyển vế đổi dấu', math: 'x = -\\frac{6}{7} - \\frac{1}{2}', explanation: 'Chuyển +1/2 sang vế phải đổi thành -1/2.' },
            { step: 2, title: 'Câu a: Quy đồng và tính toán', math: 'x = -\\frac{12}{14} - \\frac{7}{14} = -\\frac{19}{14}', explanation: 'Kết luận x = -19/14.' },
            { step: 3, title: 'Câu b: Chuyển vế đổi dấu', math: 'x = \\frac{9}{8} + \\frac{3}{4} = \\frac{9}{8} + \\frac{6}{8} = \\frac{15}{8}', explanation: 'Chuyển -3/4 sang vế phải đổi thành +3/4.' }
          ],
          tips: 'Cẩn thận giữ nguyên dấu của x, chỉ đổi dấu số hạng được chuyển qua dấu bằng.'
        }
      ],
      topicTypes: [
        {
          id: 'dang-4-1',
          title: 'Dạng 1: Tìm x trong đẳng thức',
          description: 'Sử dụng quy tắc chuyển vế và nhân chia để cô lập biến x.',
          methods: [
            {
              name: 'Phương pháp giải',
              steps: [
                '1. Thực hiện các phép tính thu gọn ở mỗi vế nếu có.',
                '2. Chuyển các số hạng chứa x về một vế (thường là vế trái), các số tự do về vế phải (nhớ đổi dấu!).',
                '3. Tính giá trị ở vế phải và tìm x.'
              ],
              example: {
                problem: 'Tìm x: $x - \\left(\\frac{5}{4} - \\frac{7}{5}\\right) = \\frac{9}{20}$ (Bài 1.27 SGK)',
                solution: 'Ta có $\\frac{5}{4} - \\frac{7}{5} = \\frac{25-28}{20} = -\\frac{3}{20}$.\nPhương trình trở thành: $x - \\left(-\\frac{3}{20}\\right) = \\frac{9}{20} \\implies x + \\frac{3}{20} = \\frac{9}{20} \\implies x = \\frac{9}{20} - \\frac{3}{20} = \\frac{6}{20} = \\frac{3}{10}$.'
              }
            }
          ],
          practiceExercises: []
        }
      ],
      practiceExercises: [
        {
          id: 'bt-4-1',
          code: '1.26a (SGK)',
          title: 'Tìm x cơ bản',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Giá trị của $x$ thoả mãn $x + 0,25 = \\frac{1}{2}$ là:',
          options: [
            'A. $x = 0,75$',
            'B. $x = 0,25$',
            'C. $x = -0,25$',
            'D. $x = 1$'
          ],
          correctOption: 1,
          solution: '$x = \\frac{1}{2} - 0,25 = 0,5 - 0,25 = 0,25 = \\frac{1}{4}$.',
          hint: 'Chuyển 0,25 sang vế phải thành -0,25.'
        }
      ],
      commonMistakes: [
        'Chuyển vế nhưng quên đổi dấu số hạng.',
        'Thực hiện phép cộng trừ trước phép nhân chia.'
      ],
      flashcards: [
        {
          id: 'fc-4-1',
          front: 'Quy tắc chuyển vế là gì?',
          back: 'Khi chuyển một số hạng từ vế này sang vế kia của đẳng thức, ta phải ĐỔI DẤU số hạng đó (+ đổi thành -, - đổi thành +).',
          tag: 'Quy tắc'
        }
      ]
    }
  ]
};

export const chapter2: Chapter = {
  id: 'chuong-2',
  volume: 1,
  number: 2,
  romanNumeral: 'Chương II',
  title: 'Số Thực',
  subtitle: 'Số thập phân vô hạn tuần hoàn, số vô tỉ, căn bậc hai số học và tập hợp số thực R',
  iconName: 'Pi',
  color: 'teal',
  bgGradient: 'from-emerald-500 to-teal-700',
  lessons: [
    {
      id: 'bai-5',
      number: 5,
      chapterId: 'chuong-2',
      volume: 1,
      title: 'Làm quen với số thập phân vô hạn tuần hoàn',
      subtitle: 'Phân biệt số thập phân hữu hạn và vô hạn tuần hoàn, chu kì và làm tròn số',
      bookPage: 26,
      funFact: 'Một phân số tối giản với mẫu dương viết được dưới dạng số thập phân hữu hạn nếu mẫu chỉ có ước nguyên tố là 2 hoặc 5.',
      keyTheories: [
        {
          id: 'kt-5-1',
          title: 'Số thập phân vô hạn tuần hoàn & Chu kì',
          badge: 'Khái niệm',
          content: 'Khi chia tử cho mẫu của một phân số mà phép chia không bao giờ dứt và các chữ số lặp lại tuần hoàn, ta được số thập phân vô hạn tuần hoàn. Nhóm chữ số lặp lại vô hạn lần gọi là chu kì.',
          formulaLatex: '\\frac{5}{18} = 0,2777\\ldots = 0,2(7); \\qquad -\\frac{17}{11} = -1,545454\\ldots = -1,(54)',
          note: 'Chữ số trong dấu ngoặc đơn biểu diễn chu kì lặp lại vô hạn.'
        },
        {
          id: 'kt-5-2',
          title: 'Làm tròn số thập phân căn cứ vào độ chính xác cho trước',
          badge: 'Quy tắc làm tròn',
          content: 'Để làm tròn số với độ chính xác $d$, ta xác định hàng làm tròn thích hợp: nếu $d = 50$ (làm tròn đến hàng trăm), $d = 5$ (hàng chục), $d = 0,5$ (hàng đơn vị), $d = 0,05$ (hàng phần mười), $d = 0,005$ (hàng phần trăm)...',
          formulaLatex: '\\text{Độ chính xác } 0,5 \\longrightarrow \\text{Làm tròn đến hàng đơn vị}\\\\ \\text{Độ chính xác } 0,05 \\longrightarrow \\text{Làm tròn đến hàng phần mười}',
          note: 'Quy tắc xét chữ số ngay sau hàng làm tròn: nếu $\\ge 5$ thì cộng 1 vào hàng làm tròn; nếu $< 5$ thì giữ nguyên.'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-5-1',
          name: 'Ví dụ 2 (SGK Trang 28) - Làm tròn số với độ chính xác cho trước',
          problem: 'Làm tròn số $12\\ 591,27$ với độ chính xác: a) $50$; \\quad b) $0,05$.',
          solution: 'Xác định hàng làm tròn tương ứng từ bảng độ chính xác rồi thực hiện làm tròn.',
          steps: [
            { step: 1, title: 'Câu a: Độ chính xác 50', math: '12\\ 591,27 \\approx 12\\ 600', explanation: 'Độ chính xác 50 -> làm tròn đến hàng trăm. Chữ số sau hàng trăm là 9 (>= 5) nên tăng 5 thành 6.' },
            { step: 2, title: 'Câu b: Độ chính xác 0,05', math: '12\\ 591,27 \\approx 12\\ 591,3', explanation: 'Độ chính xác 0,05 -> làm tròn đến hàng phần mười. Chữ số sau phần mười là 7 (>= 5) nên tăng 2 thành 3.' }
          ],
          tips: 'Độ chính xác d có dạng 0,00...05 thì hàng làm tròn là hàng của chữ số ngay trước số 5.'
        }
      ],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-5-1',
          code: '2.1 (SGK)',
          title: 'Phân loại số thập phân',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Số nào sau đây là số thập phân vô hạn tuần hoàn?',
          options: [
            'A. $0,1$',
            'B. $-1,(23)$',
            'C. $11,2(3)$',
            'D. Cả B và C đều đúng'
          ],
          correctOption: 3,
          solution: 'Cả $-1,(23)$ có chu kì 23 và $11,2(3)$ có chu kì 3 đều là số thập phân vô hạn tuần hoàn.',
          hint: 'Số có phần chu kì đóng ngoặc là vô hạn tuần hoàn.'
        }
      ],
      commonMistakes: [
        'Nhầm lẫn hàng làm tròn khi đề bài cho độ chính xác d (ví dụ d = 0,05 thì làm tròn đến hàng phần mười chứ không phải phần trăm).'
      ],
      flashcards: [
        {
          id: 'fc-5-1',
          front: 'Chu kì của số thập phân vô hạn tuần hoàn là gì?',
          back: 'Là nhóm chữ số được lặp đi lặp lại vô hạn lần sau dấu phẩy, viết trong dấu ngoặc tròn (ví dụ: 0,(3) có chu kì là 3).',
          tag: 'Định nghĩa'
        }
      ]
    },
    {
      id: 'bai-6',
      number: 6,
      chapterId: 'chuong-2',
      volume: 1,
      title: 'Số vô tỉ. Căn bậc hai số học',
      subtitle: 'Khái niệm số vô tỉ, số thập phân vô hạn không tuần hoàn, định nghĩa căn bậc hai số học',
      bookPage: 29,
      funFact: 'Số pi (π = 3,14159265...) và √2 là những số vô tỉ nổi tiếng nhất trong lịch sử toán học nhân loại.',
      keyTheories: [
        {
          id: 'kt-6-1',
          title: 'Số vô tỉ',
          badge: 'Định nghĩa',
          content: 'Số vô tỉ là số viết được dưới dạng số thập phân vô hạn không tuần hoàn. Tập hợp các số vô tỉ được kí hiệu là $\\mathbb{I}$.',
          formulaLatex: '\\sqrt{2} = 1,41421356\\ldots; \\qquad \\pi = 3,14159265\\ldots',
          note: 'Căn bậc hai số học của một số tự nhiên không chính phương luôn là một số vô tỉ.'
        },
        {
          id: 'kt-6-2',
          title: 'Căn bậc hai số học',
          badge: 'Khái niệm quan trọng',
          content: 'Căn bậc hai số học của một số $a$ không âm (kí hiệu $\\sqrt{a}$) là số $x$ không âm sao cho $x^2 = a$.',
          formulaLatex: '\\sqrt{a} = x \\iff \\begin{cases} x \\ge 0 \\\\ x^2 = a \\end{cases} \\quad (a \\ge 0)',
          note: 'Số âm không có căn bậc hai số học! Ví dụ: $\\sqrt{100} = 10$ vì $10 \\ge 0$ và $10^2 = 100$.'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-6-1',
          name: 'Ví dụ 2 (SGK Trang 30) - Tính căn bậc hai số học',
          problem: 'Tính: a) $\\sqrt{100}$; \\quad b) $\\sqrt{191^2}$; \\quad c) $\\sqrt{21,5^2}$',
          solution: 'Áp dụng định nghĩa căn bậc hai số học của số không âm.',
          steps: [
            { step: 1, title: 'Tính căn bậc hai của 100', math: '\\sqrt{100} = 10', explanation: 'Vì 10 > 0 và 10^2 = 100.' },
            { step: 2, title: 'Căn bậc hai của bình phương', math: '\\sqrt{191^2} = 191; \\quad \\sqrt{21,5^2} = 21,5', explanation: 'Vì với a > 0 thì sqrt(a^2) = a.' }
          ],
          tips: 'Căn bậc hai số học luôn luôn nhận giá trị không âm (>= 0).'
        }
      ],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-6-1',
          code: '2.6 (SGK)',
          title: 'Tìm căn bậc hai từ bình phương cho trước',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Cho biết $153^2 = 23\\ 409$. Hãy tính $\\sqrt{23\\ 409}$:',
          options: [
            'A. $153$',
            'B. $-153$',
            'C. $\\pm 153$',
            'D. $2340,9$'
          ],
          correctOption: 0,
          solution: 'Vì $153 > 0$ và $153^2 = 23\\ 409$ nên $\\sqrt{23\\ 409} = 153$.',
          hint: 'Căn bậc hai số học là số dương có bình phương bằng số đã cho.'
        }
      ],
      commonMistakes: [
        'Cho rằng $\\sqrt{a}$ có thể là số âm (Ví dụ: $\\sqrt{9} = -3$ là SAI, căn bậc hai số học luôn $\\ge 0$).'
      ],
      flashcards: [
        {
          id: 'fc-6-1',
          front: 'Căn bậc hai số học của số a không âm là gì?',
          back: 'Là số x không âm sao cho x² = a. Kí hiệu là √a.',
          tag: 'Định nghĩa'
        }
      ]
    },
    {
      id: 'bai-7',
      number: 7,
      chapterId: 'chuong-2',
      volume: 1,
      title: 'Tập hợp các số thực',
      subtitle: 'Khái niệm số thực R, trục số thực, so sánh số thực và giá trị tuyệt đối của một số thực',
      bookPage: 33,
      funFact: 'Số thực R là sự hợp nhất trọn vẹn giữa số hữu tỉ Q và số vô tỉ I: R = Q ∪ I. Mỗi điểm trên trục số biểu diễn đúng một số thực.',
      keyTheories: [
        {
          id: 'kt-7-1',
          title: 'Khái niệm Tập hợp Số Thực',
          badge: 'Hệ thống số',
          content: 'Số hữu tỉ và số vô tỉ được gọi chung là số thực. Tập hợp các số thực được kí hiệu là $\\mathbb{R}$.',
          formulaLatex: '\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{I}; \\qquad \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}',
          note: 'Mỗi số thực đều được biểu diễn bởi một điểm trên trục số, và ngược lại mỗi điểm trên trục số đều biểu diễn một số thực (lấp đầy trục số).'
        },
        {
          id: 'kt-7-2',
          title: 'Giá trị tuyệt đối của một số thực',
          badge: 'Định nghĩa & Tính chất',
          content: 'Khoảng cách từ điểm $a$ trên trục số đến gốc $O$ là giá trị tuyệt đối của số $a$, kí hiệu là $|a|$.',
          formulaLatex: '|a| = \\begin{cases} a & \\text{nếu } a \\ge 0 \\\\ -a & \\text{nếu } a < 0 \\end{cases}',
          note: 'Giá trị tuyệt đối của một số thực luôn không âm: $|a| \\ge 0$. Hai số đối nhau có giá trị tuyệt đối bằng nhau: $|-a| = |a|$.'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-7-1',
          name: 'Ví dụ (SGK Trang 36) - Tính giá trị tuyệt đối',
          problem: 'Tính: $|-2,31|;\\ \\left|\\frac{7}{5}\\right|;\\ |0|;\\ |-\\sqrt{8}|$.',
          solution: 'Áp dụng định nghĩa giá trị tuyệt đối.',
          steps: [
            { step: 1, title: 'Giá trị tuyệt đối của số âm', math: '|-2,31| = 2,31; \\quad |-\\sqrt{8}| = \\sqrt{8}', explanation: 'Giá trị tuyệt đối của số âm là số đối của nó (số dương).' },
            { step: 2, title: 'Giá trị tuyệt đối của số dương và số 0', math: '\\left|\\frac{7}{5}\\right| = \\frac{7}{5}; \\quad |0| = 0', explanation: 'Giá trị tuyệt đối của số dương là chính nó, của 0 là 0.' }
          ],
          tips: 'Kết quả của dấu giá trị tuyệt đối |...| luôn là số không âm.'
        }
      ],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-7-1',
          code: '2.18 (SGK)',
          title: 'Tìm số thực x thoả mãn giá trị tuyệt đối',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Tìm tất cả các số thực $x$ thoả mãn $|x| = 2,5$:',
          options: [
            'A. $x = 2,5$',
            'B. $x = -2,5$',
            'C. $x = 2,5$ hoặc $x = -2,5$',
            'D. Không có giá trị x'
          ],
          correctOption: 2,
          solution: 'Vì $|2,5| = 2,5$ và $|-2,5| = 2,5$ nên có hai giá trị là $x = 2,5$ hoặc $x = -2,5$.',
          hint: 'Phương trình |x| = k (k > 0) luôn có hai nghiệm là x = k hoặc x = -k.'
        }
      ],
      commonMistakes: [
        'Viết $|x| = -2,5$ là SAI vì giá trị tuyệt đối không bao giờ âm.',
        'Quên trường hợp số âm khi giải $|x| = a$ ($a > 0$).'
      ],
      flashcards: [
        {
          id: 'fc-7-1',
          front: 'Giá trị tuyệt đối của số thực x là gì?',
          back: '|x| là khoảng cách từ điểm x đến gốc O trên trục số. |x| = x nếu x ≥ 0 và |x| = -x nếu x < 0.',
          tag: 'Định nghĩa'
        }
      ]
    }
  ]
};

export const chapter3: Chapter = {
  id: 'chuong-3',
  volume: 1,
  number: 3,
  romanNumeral: 'Chương III',
  title: 'Góc và Đường Thẳng Song Song',
  subtitle: 'Góc kề bù, đối đỉnh, tia phân giác, hai đường thẳng song song, tiên đề Euclid và chứng minh định lí',
  iconName: 'Shapes',
  color: 'teal',
  bgGradient: 'from-teal-600 to-cyan-700',
  lessons: [
    {
      id: 'bai-8',
      number: 8,
      chapterId: 'chuong-3',
      volume: 1,
      title: 'Góc ở vị trí đặc biệt. Tia phân giác của một góc',
      subtitle: 'Hai góc kề bù, hai góc đối đỉnh, tính chất và cách vẽ tia phân giác',
      bookPage: 40,
      funFact: 'Hai góc đối đỉnh luôn có số đo bằng nhau, nhưng hai góc bằng nhau chưa chắc đã đối đỉnh!',
      keyTheories: [
        {
          id: 'kt-8-1',
          title: 'Hai góc kề bù',
          badge: 'Định nghĩa & Tính chất',
          content: 'Hai góc kề bù là hai góc vừa kề nhau (có một cạnh chung, hai cạnh còn lại nằm trên hai nửa mặt phẳng đối nhau) vừa bù nhau. Tổng số đo của hai góc kề bù bằng $180^\\circ$.',
          formulaLatex: '\\widehat{xOz} + \\widehat{zOy} = 180^\\circ \\quad (\\text{với } Ox, Oy \\text{ là hai tia đối nhau})'
        },
        {
          id: 'kt-8-2',
          title: 'Hai góc đối đỉnh',
          badge: 'Tính chất cốt lõi',
          content: 'Hai góc đối đỉnh là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia. Hai góc đối đỉnh thì bằng nhau.',
          formulaLatex: '\\widehat{xOy} = \\widehat{x\'Oy\'} \\quad (\\text{hai góc đối đỉnh})'
        },
        {
          id: 'kt-8-3',
          title: 'Tia phân giác của một góc',
          badge: 'Khái niệm hình học',
          content: 'Tia phân giác của một góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau.',
          formulaLatex: '\\text{Tia } Oz \\text{ là phân giác của } \\widehat{xOy} \\iff \\widehat{xOz} = \\widehat{zOy} = \\frac{1}{2} \\widehat{xOy}'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-8-1',
          name: 'Ví dụ 1 (SGK Trang 43) - Tính số đo góc đối đỉnh và kề bù',
          problem: 'Cho hai đường thẳng $xx\'$ và $yy\'$ cắt nhau tại $O$. Biết $\\widehat{xOy} = 60^\\circ$. Tính số đo các góc $\\widehat{x\'Oy\'}$ và $\\widehat{x\'Oy}$.',
          solution: 'Dùng tính chất góc đối đỉnh và hai góc kề bù.',
          steps: [
            { step: 1, title: 'Tính góc đối đỉnh', math: '\\widehat{x\'Oy\'} = \\widehat{xOy} = 60^\\circ', explanation: 'Hai góc đối đỉnh thì bằng nhau.' },
            { step: 2, title: 'Tính góc kề bù', math: '\\widehat{x\'Oy} + \\widehat{xOy} = 180^\\circ \\implies \\widehat{x\'Oy} = 180^\\circ - 60^\\circ = 120^\\circ', explanation: 'Hai góc kề bù có tổng số đo là 180 độ.' }
          ],
          tips: 'Khi hai đường thẳng cắt nhau tạo thành 4 góc, chỉ cần biết 1 góc là tính được 3 góc còn lại.'
        }
      ],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-8-1',
          code: '3.3 (SGK)',
          title: 'Tính góc tia phân giác',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Vẽ góc $\\widehat{xOy} = 60^\\circ$. Vẽ tia $Ot$ là tia phân giác của góc $\\widehat{xOy}$. Số đo của góc $\\widehat{tOy}$ là:',
          options: [
            'A. $60^\\circ$',
            'B. $30^\\circ$',
            'C. $120^\\circ$',
            'D. $45^\\circ$'
          ],
          correctOption: 1,
          solution: 'Vì $Ot$ là tia phân giác của $\\widehat{xOy}$ nên $\\widehat{tOy} = \\frac{1}{2} \\widehat{xOy} = \\frac{1}{2} \\cdot 60^\\circ = 30^\\circ$.',
          hint: 'Tia phân giác chia đôi góc thành hai phần bằng nhau.'
        }
      ],
      commonMistakes: [
        'Nhầm hai góc bằng nhau là đối đỉnh (phải thoả mãn các cạnh là các tia đối nhau).'
      ],
      flashcards: [
        {
          id: 'fc-8-1',
          front: 'Hai góc kề bù có tổng số đo bằng bao nhiêu?',
          back: 'Tổng số đo của hai góc kề bù luôn bằng 180°.',
          tag: 'Tính chất'
        }
      ]
    },
    {
      id: 'bai-9',
      number: 9,
      chapterId: 'chuong-3',
      volume: 1,
      title: 'Hai đường thẳng song song và dấu hiệu nhận biết',
      subtitle: 'Các góc so le trong, đồng vị, trong cùng phía và dấu hiệu nhận biết hai đường thẳng song song',
      bookPage: 46,
      funFact: 'Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì chúng song song với nhau.',
      keyTheories: [
        {
          id: 'kt-9-1',
          title: 'Các góc tạo bởi một đường thẳng cắt hai đường thẳng',
          badge: 'Vị trí góc',
          content: 'Khi đường thẳng $c$ cắt hai đường thẳng $a$ và $b$, tạo thành các cặp góc: So le trong, Đồng vị, Trong cùng phía.',
          diagramType: 'parallelLines'
        },
        {
          id: 'kt-9-2',
          title: 'Dấu hiệu nhận biết hai đường thẳng song song',
          badge: 'Định lí nhận biết',
          content: 'Nếu đường thẳng $c$ cắt hai đường thẳng phân biệt $a, b$ và trong các góc tạo thành có: một cặp góc so le trong bằng nhau HOẶC một cặp góc đồng vị bằng nhau thì $a \\parallel b$.',
          formulaLatex: '\\text{Nếu } \\widehat{A}_1 = \\widehat{B}_1 \\text{ (đồng vị) hoặc } \\widehat{A}_4 = \\widehat{B}_2 \\text{ (so le trong)} \\implies a \\parallel b',
          note: 'Hai đường thẳng phân biệt cùng vuông góc với một đường thẳng thứ ba thì song song với nhau: $a \\perp c$ và $b \\perp c \\implies a \\parallel b$.'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-9-1',
          name: 'Ví dụ (SGK Trang 48) - Chứng minh hai đường thẳng song song',
          problem: 'Quan sát Hình 3.21 và giải thích tại sao $xy \\parallel x\'y\'$, biết $\\widehat{xAB} = \\widehat{ABy\'} = 70^\\circ$.',
          solution: 'Hai góc ở vị trí so le trong và có số đo bằng nhau nên hai đường thẳng song song.',
          steps: [
            { step: 1, title: 'Chỉ ra vị trí cặp góc', math: '\\widehat{xAB} \\text{ và } \\widehat{ABy\'} \\text{ là hai góc so le trong}', explanation: 'Nằm ở hai phía của cát tuyến AB.' },
            { step: 2, title: 'So sánh số đo', math: '\\widehat{xAB} = \\widehat{ABy\'} = 70^\\circ', explanation: 'Theo giả thiết đề bài.' },
            { step: 3, title: 'Kết luận song song', math: '\\implies xy \\parallel x\'y\'', explanation: 'Theo dấu hiệu nhận biết hai đường thẳng song song.' }
          ],
          tips: 'Luôn nêu rõ: 1) Tên hai góc và vị trí (so le trong/đồng vị); 2) Số đo bằng nhau; 3) Kết luận.'
        }
      ],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-9-1',
          code: '3.6 (SGK)',
          title: 'Nhận biết cặp góc so le trong',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc trong cùng phía có tính chất gì?',
          options: [
            'A. Bằng nhau',
            'B. Bù nhau (tổng bằng 180°)',
            'C. Phụ nhau (tổng bằng 90°)',
            'D. Đối đỉnh nhau'
          ],
          correctOption: 1,
          solution: 'Hai góc trong cùng phía tạo bởi một cát tuyến cắt hai đường thẳng song song thì bù nhau (tổng bằng $180^\\circ$).',
          hint: 'Góc so le trong thì bằng nhau, góc trong cùng phía thì bù nhau.'
        }
      ],
      commonMistakes: [
        'Nhầm vị trí giữa góc so le trong và góc trong cùng phía.'
      ],
      flashcards: [
        {
          id: 'fc-9-1',
          front: 'Dấu hiệu nhận biết hai đường thẳng song song?',
          back: 'Một đường thẳng cắt hai đường thẳng tạo ra một cặp góc so le trong bằng nhau (hoặc đồng vị bằng nhau) thì hai đường thẳng đó song song.',
          tag: 'Dấu hiệu'
        }
      ]
    },
    {
      id: 'bai-10',
      number: 10,
      chapterId: 'chuong-3',
      volume: 1,
      title: 'Tiên đề Euclid. Tính chất của hai đường thẳng song song',
      subtitle: 'Nội dung tiên đề Euclid, tính chất các góc tạo bởi hai đường thẳng song song',
      bookPage: 51,
      funFact: 'Euclid là nhà toán học vĩ đại thời Hy Lạp cổ đại (khoảng thế kỉ III TCN), được mệnh danh là "Cha đẻ của Hình học".',
      keyTheories: [
        {
          id: 'kt-10-1',
          title: 'Tiên đề Euclid về đường thẳng song song',
          badge: 'Tiên đề nền tảng',
          content: 'Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.',
          formulaLatex: 'M \\notin a \\implies \\text{tồn tại duy nhất đường thẳng } b \\text{ qua } M \\text{ sao cho } b \\parallel a.'
        },
        {
          id: 'kt-10-2',
          title: 'Tính chất của hai đường thẳng song song',
          badge: 'Tính chất',
          content: 'Nếu một đường thẳng cắt hai đường thẳng song song thì: Hai góc so le trong bằng nhau; Hai góc đồng vị bằng nhau; Hai góc trong cùng phía bù nhau.',
          formulaLatex: 'a \\parallel b \\implies \\begin{cases} \\text{Góc so le trong bằng nhau} \\\\ \\text{Góc đồng vị bằng nhau} \\\\ \\text{Góc trong cùng phía bù nhau: } \\widehat{A} + \\widehat{B} = 180^\\circ \\end{cases}'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-10-1',
          code: '3.17 (SGK)',
          title: 'Tính số đo góc khi có đường thẳng song song',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Cho $mn \\parallel pq$. Một đường thẳng cắt $mn$ tại $H$ và cắt $pq$ tại $K$, biết góc đồng vị tại $K$ bằng $70^\\circ$. Số đo góc so le trong tại $H$ là:',
          options: [
            'A. $110^\\circ$',
            'B. $70^\\circ$',
            'C. $90^\\circ$',
            'D. $20^\\circ$'
          ],
          correctOption: 1,
          solution: 'Vì $mn \\parallel pq$ nên góc so le trong bằng góc đồng vị, cùng bằng $70^\\circ$.',
          hint: 'Hai đường thẳng song song thì các góc so le trong và đồng vị đều bằng nhau.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-10-1',
          front: 'Nội dung Tiên đề Euclid là gì?',
          back: 'Qua một điểm nằm ngoài một đường thẳng, chỉ có DUY NHẤT một đường thẳng song song với đường thẳng đó.',
          tag: 'Tiên đề'
        }
      ]
    }
  ]
};

export const chapter4: Chapter = {
  id: 'chuong-4',
  volume: 1,
  number: 4,
  romanNumeral: 'Chương IV',
  title: 'Tam Giác Bằng Nhau',
  subtitle: 'Tổng ba góc của tam giác, 3 trường hợp bằng nhau c-c-c, c-g-c, g-c-g, tam giác vuông và tam giác cân',
  iconName: 'Triangle',
  color: 'teal',
  bgGradient: 'from-cyan-600 to-teal-800',
  lessons: [
    {
      id: 'bai-12',
      number: 12,
      chapterId: 'chuong-4',
      volume: 1,
      title: 'Tổng các góc trong một tam giác',
      subtitle: 'Định lí tổng 3 góc bằng 180°, góc ngoài của tam giác và hai góc phụ nhau trong tam giác vuông',
      bookPage: 60,
      funFact: 'Góc ngoài tại một đỉnh của tam giác có số đo bằng tổng số đo hai góc trong không kề với nó!',
      keyTheories: [
        {
          id: 'kt-12-1',
          title: 'Tổng ba góc của một tam giác',
          badge: 'Định lí trọng tâm',
          content: 'Tổng ba góc trong một tam giác luôn bằng $180^\\circ$.',
          formulaLatex: '\\text{Trong } \\Delta ABC: \\quad \\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ',
          diagramType: 'triangleAngles'
        },
        {
          id: 'kt-12-2',
          title: 'Áp dụng vào tam giác vuông',
          badge: 'Hệ quả',
          content: 'Trong tam giác vuông, hai góc nhọn phụ nhau (tổng số đo bằng $90^\\circ$).',
          formulaLatex: '\\Delta ABC \\text{ vuông tại } A \\implies \\widehat{B} + \\widehat{C} = 90^\\circ'
        },
        {
          id: 'kt-12-3',
          title: 'Góc ngoài của tam giác',
          badge: 'Tính chất góc ngoài',
          content: 'Mỗi góc ngoài của một tam giác có số đo bằng tổng số đo của hai góc trong không kề với nó.',
          formulaLatex: '\\widehat{ACx} = \\widehat{A} + \\widehat{B} \\quad (\\text{với } \\widehat{ACx} \\text{ là góc ngoài tại đỉnh } C)'
        }
      ],
      textbookExamples: [
        {
          id: 'vd-12-1',
          name: 'Ví dụ (SGK Trang 61) - Tính số đo góc trong tam giác',
          problem: 'Cho tam giác $ABC$ có $\\widehat{B} = 50^\\circ, \\widehat{C} = 60^\\circ$. Tính số đo góc $\\widehat{A}$.',
          solution: 'Áp dụng định lí tổng ba góc trong tam giác.',
          steps: [
            { step: 1, title: 'Viết công thức tổng ba góc', math: '\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ', explanation: 'Tổng 3 góc trong tam giác ABC bằng 180 độ.' },
            { step: 2, title: 'Thay số và tính', math: '\\widehat{A} = 180^\\circ - \\widehat{B} - \\widehat{C} = 180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ', explanation: 'Góc A bằng 70 độ.' }
          ],
          tips: 'Muốn tìm 1 góc khi biết 2 góc còn lại: Lấy 180° trừ đi tổng 2 góc đã biết.'
        }
      ],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-12-1',
          code: '4.1 (SGK)',
          title: 'Tính góc trong tam giác vuông',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Cho tam giác $MNP$ vuông tại $M$, biết $\\widehat{N} = 55^\\circ$. Số đo góc $\\widehat{P}$ là:',
          options: [
            'A. $35^\\circ$',
            'B. $45^\\circ$',
            'C. $55^\\circ$',
            'D. $125^\\circ$'
          ],
          correctOption: 0,
          solution: 'Trong tam giác vuông tại M: $\\widehat{P} = 90^\\circ - \\widehat{N} = 90^\\circ - 55^\\circ = 35^\\circ$.',
          hint: 'Hai góc nhọn trong tam giác vuông phụ nhau (tổng bằng 90°).'
        }
      ],
      commonMistakes: [
        'Lấy 180° trừ đi 1 góc thay vì tổng 2 góc.',
        'Quên rằng tam giác vuông thì hai góc nhọn có tổng là 90° (không cần trừ từ 180°).'
      ],
      flashcards: [
        {
          id: 'fc-12-1',
          front: 'Tổng ba góc của một tam giác bằng bao nhiêu?',
          back: 'Luôn bằng 180° trong mọi tam giác!',
          tag: 'Định lí'
        }
      ]
    },
    {
      id: 'bai-13-14',
      number: 13,
      chapterId: 'chuong-4',
      volume: 1,
      title: 'Các trường hợp bằng nhau của tam giác (c-c-c, c-g-c, g-c-g)',
      subtitle: 'Ba trường hợp bằng nhau cơ bản của tam giác và phương pháp lập luận chứng minh',
      bookPage: 63,
      funFact: 'Khi viết kí hiệu hai tam giác bằng nhau, tên các đỉnh tương ứng phải được viết theo đúng thứ tự!',
      keyTheories: [
        {
          id: 'kt-13-1',
          title: 'Trường hợp 1: Cạnh - Cạnh - Cạnh (c.c.c)',
          badge: 'Trường hợp 1',
          content: 'Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.',
          formulaLatex: 'AB = A\'B\',\\ AC = A\'C\',\\ BC = B\'C\' \\implies \\Delta ABC = \\Delta A\'B\'C\' \\text{ (c.c.c)}'
        },
        {
          id: 'kt-13-2',
          title: 'Trường hợp 2: Cạnh - Góc - Cạnh (c.g.c)',
          badge: 'Trường hợp 2',
          content: 'Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau.',
          formulaLatex: 'AB = A\'B\',\\ \\widehat{A} = \\widehat{A\'},\\ AC = A\'C\' \\implies \\Delta ABC = \\Delta A\'B\'C\' \\text{ (c.g.c)}',
          highlight: 'Lưu ý: Góc bằng nhau PHẢI LÀ GÓC XEN GIỮA hai cạnh!'
        },
        {
          id: 'kt-13-3',
          title: 'Trường hợp 3: Góc - Cạnh - Góc (g.c.g)',
          badge: 'Trường hợp 3',
          content: 'Nếu một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau.',
          formulaLatex: '\\widehat{B} = \\widehat{B\'},\\ BC = B\'C\',\\ \\widehat{C} = \\widehat{C\'} \\implies \\Delta ABC = \\Delta A\'B\'C\' \\text{ (g.c.g)}'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-13-1',
          code: '4.4 (SGK)',
          title: 'Chọn kí hiệu tam giác bằng nhau đúng thứ tự đỉnh',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Cho $\\Delta ABC$ và $\\Delta DEF$ có $AB = DE, BC = EF, AC = DF$. Kí hiệu nào sau đây viết đúng?',
          options: [
            'A. $\\Delta ABC = \\Delta DEF$',
            'B. $\\Delta ABC = \\Delta EDF$',
            'C. $\\Delta BAC = \\Delta DEF$',
            'D. $\\Delta ACB = \\Delta DFE$'
          ],
          correctOption: 0,
          solution: 'Đỉnh A tương ứng D, B tương ứng E, C tương ứng F, do đó $\\Delta ABC = \\Delta DEF$.',
          hint: 'Các đỉnh tương ứng phải xếp đúng vị trí 1-1, 2-2, 3-3.'
        }
      ],
      commonMistakes: [
        'Trong trường hợp c-g-c, góc lấy không phải là góc xen giữa hai cạnh.',
        'Viết sai thứ tự các đỉnh tương ứng trong kí hiệu hai tam giác bằng nhau.'
      ],
      flashcards: [
        {
          id: 'fc-13-1',
          front: '3 trường hợp bằng nhau của tam giác thường là gì?',
          back: '1) Cạnh - Cạnh - Cạnh (c-c-c)\n2) Cạnh - Góc - Cạnh (c-g-c, góc xen giữa)\n3) Góc - Cạnh - Góc (g-c-g, cạnh xen giữa 2 góc)',
          tag: 'Tổng hợp'
        }
      ]
    },
    {
      id: 'bai-16',
      number: 16,
      chapterId: 'chuong-4',
      volume: 1,
      title: 'Tam giác cân. Đường trung trực của đoạn thẳng',
      subtitle: 'Định nghĩa, tính chất tam giác cân, tam giác đều và tính chất đường trung trực',
      bookPage: 80,
      funFact: 'Trong tam giác cân, đường cao, đường trung tuyến, đường phân giác xuất phát từ đỉnh đối diện đáy đều trùng nhau!',
      keyTheories: [
        {
          id: 'kt-16-1',
          title: 'Tam giác cân và tính chất',
          badge: 'Định nghĩa & Tính chất',
          content: 'Tam giác cân là tam giác có hai cạnh bằng nhau. Trong một tam giác cân, hai góc ở đáy bằng nhau. Ngược lại, nếu một tam giác có hai góc bằng nhau thì tam giác đó là tam giác cân.',
          formulaLatex: '\\Delta ABC \\text{ cân tại } A \\iff AB = AC \\iff \\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}'
        },
        {
          id: 'kt-16-2',
          title: 'Tam giác đều',
          badge: 'Đặc biệt',
          content: 'Tam giác đều là tam giác có ba cạnh bằng nhau. Mỗi góc của tam giác đều bằng $60^\\circ$. Tam giác cân có một góc bằng $60^\\circ$ là tam giác đều.',
          formulaLatex: '\\Delta ABC \\text{ đều} \\iff AB = BC = CA \\iff \\widehat{A} = \\widehat{B} = \\widehat{C} = 60^\\circ'
        },
        {
          id: 'kt-16-3',
          title: 'Đường trung trực của đoạn thẳng',
          badge: 'Định nghĩa & Tính chất',
          content: 'Đường thẳng vuông góc với một đoạn thẳng tại trung điểm của nó được gọi là đường trung trực của đoạn thẳng đó. Điểm nằm trên đường trung trực thì cách đều hai đầu mút.',
          formulaLatex: 'M \\in d \\text{ (trung trực } AB) \\iff MA = MB'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-16-1',
          code: '4.26 (SGK)',
          title: 'Góc ở đáy của tam giác vuông cân',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Mỗi góc nhọn của một tam giác vuông cân có số đo bằng:',
          options: [
            'A. $30^\\circ$',
            'B. $45^\\circ$',
            'C. $60^\\circ$',
            'D. $90^\\circ$'
          ],
          correctOption: 1,
          solution: 'Tam giác vuông cân có góc vuông $90^\\circ$ và hai góc đáy bằng nhau, do đó mỗi góc nhọn bằng $\\frac{90^\\circ}{2} = 45^\\circ$.',
          hint: 'Lấy 90° chia đều cho 2 góc nhọn.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-16-1',
          front: 'Tính chất đường trung trực của đoạn thẳng?',
          back: 'Điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó (MA = MB).',
          tag: 'Tính chất'
        }
      ]
    }
  ]
};

export const chapter5: Chapter = {
  id: 'chuong-5',
  volume: 1,
  number: 5,
  romanNumeral: 'Chương V',
  title: 'Thu Thập và Biểu Diễn Dữ Liệu',
  subtitle: 'Phân loại dữ liệu, tính đại diện của mẫu, biểu đồ hình quạt tròn và biểu đồ đoạn thẳng',
  iconName: 'PieChart',
  color: 'teal',
  bgGradient: 'from-teal-500 to-emerald-700',
  lessons: [
    {
      id: 'bai-17',
      number: 17,
      chapterId: 'chuong-5',
      volume: 1,
      title: 'Thu thập và phân loại dữ liệu',
      subtitle: 'Dữ liệu là số (định lượng), dữ liệu không là số (định tính) và tính đại diện của dữ liệu',
      bookPage: 88,
      funFact: '"Không có dữ liệu, chúng ta như người mù và điếc đứng giữa xa lộ." - Geoffrey Moore',
      keyTheories: [
        {
          id: 'kt-17-1',
          title: 'Phân loại dữ liệu',
          badge: 'Phân loại',
          content: 'Dữ liệu thu thập được chia thành hai loại: Dữ liệu là số (dữ liệu định lượng: điểm số, chiều cao, thời gian...) và Dữ liệu không là số (dữ liệu định tính: màu sắc, xếp loại, giới tính, ý kiến...).',
          note: 'Dữ liệu không là số có thể sắp thứ tự (ví dụ: Xuất sắc, Tốt, Khá, Trung bình) hoặc không thể sắp thứ tự (ví dụ: tên tỉnh thành, sở thích).'
        },
        {
          id: 'kt-17-2',
          title: 'Tính đại diện của dữ liệu',
          badge: 'Nguyên tắc thống kê',
          content: 'Dữ liệu thu thập phải đảm bảo tính đại diện cho toàn bộ đối tượng đang quan tâm. Mẫu khảo sát phải được chọn ngẫu nhiên và đủ rộng, không được thiên vị một nhóm đối tượng cụ thể.',
          highlight: 'Ví dụ: Khảo sát sở thích học sinh toàn trường thì không thể chỉ phát phiếu cho các bạn trong CLB Toán!'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-17-1',
          code: '5.1 (SGK)',
          title: 'Xác định loại dữ liệu',
          level: 'Nhận biết',
          type: 'trac_nghiem',
          problem: 'Dữ liệu về "Nhiệt độ trung bình các ngày trong tuần" thuộc loại dữ liệu nào?',
          options: [
            'A. Dữ liệu là số (định lượng)',
            'B. Dữ liệu không là số không sắp thứ tự',
            'C. Dữ liệu không là số có thể sắp thứ tự',
            'D. Dữ liệu hình ảnh'
          ],
          correctOption: 0,
          solution: 'Nhiệt độ được đo bằng các con số (°C) nên là dữ liệu là số (định lượng).',
          hint: 'Nhiệt độ đo được bằng số cụ thể.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-17-1',
          front: 'Dữ liệu định lượng là gì?',
          back: 'Là dữ liệu bằng số (ví dụ: điểm số, cân nặng, số lượng học sinh).',
          tag: 'Khái niệm'
        }
      ]
    },
    {
      id: 'bai-18-19',
      number: 18,
      chapterId: 'chuong-5',
      volume: 1,
      title: 'Biểu đồ hình quạt tròn và Biểu đồ đoạn thẳng',
      subtitle: 'Đọc, phân tích dữ liệu trên biểu đồ quạt tròn và biểu đồ đoạn thẳng, nhận xét xu hướng',
      bookPage: 93,
      funFact: 'Biểu đồ quạt tròn biểu diễn cơ cấu thành phần trên tổng 100%, còn biểu đồ đoạn thẳng biểu diễn sự biến thiên theo thời gian.',
      keyTheories: [
        {
          id: 'kt-18-1',
          title: 'Biểu đồ hình quạt tròn',
          badge: 'Cơ cấu tỉ lệ',
          content: 'Biểu đồ quạt tròn dùng để so sánh các phần trong toàn bộ dữ liệu (tổng luôn là 100%). Cả hình tròn tương ứng với 100%.',
          formulaLatex: '\\text{Tổng phần trăm các hình quạt} = 100\\%'
        },
        {
          id: 'kt-18-2',
          title: 'Biểu đồ đoạn thẳng',
          badge: 'Xu hướng thời gian',
          content: 'Biểu đồ đoạn thẳng dùng để biểu diễn sự thay đổi của một đại lượng theo thời gian (năm, tháng, ngày, giờ). Trục ngang biểu diễn thời gian, trục đứng biểu diễn đại lượng quan sát.',
          note: 'Độ dốc của đoạn thẳng cho biết tốc độ tăng hay giảm của đại lượng.'
        }
      ],
      textbookExamples: [],
      topicTypes: [],
      practiceExercises: [
        {
          id: 'bt-18-1',
          code: '5.8 (SGK)',
          title: 'Tính số lượng từ biểu đồ quạt',
          level: 'Thông hiểu',
          type: 'trac_nghiem',
          problem: 'Một đội hiến máu có 200 tình nguyện viên. Biểu đồ quạt cho biết tỉ lệ người có nhóm máu O chiếm 40%. Số người mang nhóm máu O là:',
          options: [
            'A. 40 người',
            'B. 60 người',
            'C. 80 người',
            'D. 100 người'
          ],
          correctOption: 2,
          solution: 'Số người mang nhóm máu O là: $200 \\cdot 40\\% = 200 \\cdot 0,4 = 80$ người.',
          hint: 'Lấy tổng số người nhân với tỉ lệ phần trăm.'
        }
      ],
      commonMistakes: [],
      flashcards: [
        {
          id: 'fc-18-1',
          front: 'Khi nào nên dùng biểu đồ đoạn thẳng?',
          back: 'Khi cần biểu diễn sự thay đổi, xu hướng tăng/giảm của một đại lượng theo thời gian.',
          tag: 'Ứng dụng'
        }
      ]
    }
  ]
};
