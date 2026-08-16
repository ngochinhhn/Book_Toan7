import React, { useState } from 'react';
import { Layers, Search, Sparkles, BookOpen, ChevronRight, Lightbulb } from 'lucide-react';
import { Chapter } from '../types';
import MathView from './MathView';

interface TopicSummaryViewProps {
  chapters: Chapter[];
  onSelectLesson: (lessonId: string) => void;
  onOpenChat: (prompt: string) => void;
}

export const TopicSummaryView: React.FC<TopicSummaryViewProps> = ({
  chapters,
  onSelectLesson,
  onOpenChat,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');

  // Collect all topic types across all chapters
  const allTopicTypes = chapters.flatMap((chapter) =>
    chapter.lessons.flatMap((lesson) =>
      lesson.topicTypes.map((topic) => ({
        ...topic,
        chapter,
        lesson,
      }))
    )
  );

  const filteredTopics = allTopicTypes.filter((item) => {
    const matchesSearch =
      !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.chapter.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesChapter = selectedChapterId === 'all' || item.chapter.id === selectedChapterId;
    return matchesSearch && matchesChapter;
  });

  return (
    <div className="flex-1 bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-teal-100 shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="p-1.5 bg-teal-700 text-white rounded-lg">
                <Layers className="w-5 h-5" />
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Tổng Hợp Các Dạng Toán Trọng Tâm
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              Tuyển tập các dạng toán điển hình theo từng bài học SGK Toán 7, kèm phương pháp giải và ví dụ mẫu.
            </p>
          </div>

          <button
            onClick={() =>
              onOpenChat(
                'Hãy tổng hợp cho em 5 dạng toán quan trọng nhất thường xuất hiện trong đề thi học kì Toán 7.'
              )
            }
            className="px-4 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Đề Xuất Dạng Trọng Tâm</span>
          </button>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm dạng toán (VD: tính giá trị, chứng minh...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
            />
          </div>

          <select
            value={selectedChapterId}
            onChange={(e) => setSelectedChapterId(e.target.value)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition"
          >
            <option value="all">Tất cả các chương</option>
            {chapters.map((ch) => (
              <option key={ch.id} value={ch.id}>
                {ch.romanNumeral}: {ch.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Topics List */}
      <div className="space-y-6">
        {filteredTopics.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-xs">
            <Layers className="w-12 h-12 mx-auto text-teal-600 opacity-40 mb-3" />
            <p className="text-sm font-bold text-slate-700 mb-1">Không tìm thấy dạng toán phù hợp</p>
            <p>Hãy thử tìm kiếm với từ khoá khác hoặc hỏi trợ giảng AI nhé!</p>
          </div>
        ) : (
          filteredTopics.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden hover:border-teal-300 transition"
            >
              {/* Header */}
              <div className="px-5 py-3.5 bg-gradient-to-r from-teal-700 to-teal-800 text-white flex items-center justify-between flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-teal-600 rounded text-[10px] font-bold">
                      {item.chapter.romanNumeral} • Bài {item.lesson.number}
                    </span>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                  </div>
                </div>

                <button
                  onClick={() => onSelectLesson(item.lesson.id)}
                  className="text-xs text-teal-100 hover:text-white flex items-center gap-1 font-semibold"
                >
                  <span>Xem bài học</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>

                {item.methods.map((method, mi) => (
                  <div key={mi} className="space-y-3">
                    <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-100">
                      <h4 className="text-xs font-bold text-teal-950 mb-2">
                        <i className="fa-solid fa-list-check mr-1.5"></i> {method.name}:
                      </h4>
                      <div className="space-y-1.5 text-xs text-slate-700">
                        {method.steps.map((st, si) => (
                          <p key={si}><MathView content={st} /></p>
                        ))}
                      </div>
                    </div>

                    {method.example && (
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                        <div className="font-bold text-slate-800">
                          <strong>Ví dụ mẫu: </strong>
                          <MathView content={method.example.problem} />
                        </div>
                        <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-700 leading-relaxed">
                          <strong className="text-teal-800 block mb-1">Lời giải:</strong>
                          <MathView content={method.example.solution} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() =>
                      onOpenChat(
                        `Em muốn luyện tập thêm 3 bài toán dạng: "${item.title}" thuộc Bài ${item.lesson.number}: ${item.lesson.title}`
                      )
                    }
                    className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Luyện thêm bài tập dạng này cùng AI</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TopicSummaryView;
