import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Bookmark,
  Sparkles,
  HelpCircle,
  Lightbulb,
  AlertTriangle,
  Layers,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Award,
  Edit3,
  Share2,
  Check,
  Zap,
  ArrowRight,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Lesson, Chapter, UserProgress, Exercise } from '../types';
import MathView from './MathView';
import InteractiveDiagram from './InteractiveDiagrams';

interface LessonDetailProps {
  lesson: Lesson;
  chapter: Chapter;
  userProgress: UserProgress;
  onToggleCompleteLesson: (lessonId: string) => void;
  onToggleBookmarkLesson: (lessonId: string) => void;
  onSaveExerciseResult: (exerciseId: string, isCorrect: boolean, userChoice?: number) => void;
  onSaveLessonNote: (lessonId: string, note: string) => void;
  onToggleFlashcardLearned: (cardId: string) => void;
  onOpenChat: (initialPrompt?: string) => void;
  onSelectNextLesson?: () => void;
}

type TabType = 'theory' | 'examples' | 'topics' | 'practice' | 'flashcards';

export const LessonDetail: React.FC<LessonDetailProps> = ({
  lesson,
  chapter,
  userProgress,
  onToggleCompleteLesson,
  onToggleBookmarkLesson,
  onSaveExerciseResult,
  onSaveLessonNote,
  onToggleFlashcardLearned,
  onOpenChat,
  onSelectNextLesson,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('theory');
  const [expandedExamples, setExpandedExamples] = useState<Record<string, boolean>>({
    [lesson.textbookExamples[0]?.id || '']: true,
  });
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});
  const [showHint, setShowHint] = useState<Record<string, boolean>>({});
  const [activeFlashcardIndex, setActiveFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [noteText, setNoteText] = useState(userProgress.lessonNotes[lesson.id] || '');
  const [isNoteSaved, setIsNoteSaved] = useState(false);

  const isCompleted = userProgress.completedLessonIds.includes(lesson.id);
  const isBookmarked = userProgress.bookmarkedLessonIds.includes(lesson.id);

  const toggleExample = (id: string) => {
    setExpandedExamples((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectOption = (exercise: Exercise, optionIndex: number) => {
    setUserAnswers((prev) => ({ ...prev, [exercise.id]: optionIndex }));
    const isCorrect = optionIndex === exercise.correctOption;
    onSaveExerciseResult(exercise.id, isCorrect, optionIndex);
    setShowSolution((prev) => ({ ...prev, [exercise.id]: true }));

    if (isCorrect) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
  };

  const handleSaveNote = () => {
    onSaveLessonNote(lesson.id, noteText);
    setIsNoteSaved(true);
    setTimeout(() => setIsNoteSaved(false), 2000);
  };

  const currentFlashcard = lesson.flashcards[activeFlashcardIndex];
  const isCardLearned = currentFlashcard
    ? userProgress.flashcardsLearned.includes(currentFlashcard.id)
    : false;

  return (
    <div className="flex-1 bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
      {/* Lesson Header Banner */}
      <div className="bg-white rounded-2xl border border-teal-100 shadow-sm p-5 sm:p-6 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-full pointer-events-none -mr-20 -mt-20"></div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-[11px] font-bold">
                {chapter.romanNumeral}: {chapter.title}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                • SGK Trang {lesson.bookPage}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Bài {lesson.number}: {lesson.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">{lesson.subtitle}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0 flex-wrap">
            <button
              onClick={() => onToggleBookmarkLesson(lesson.id)}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                isBookmarked
                  ? 'bg-amber-50 text-amber-700 border-amber-300'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
              title={isBookmarked ? 'Bỏ lưu bài học' : 'Lưu vào bài học yêu thích'}
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isBookmarked ? 'fill-amber-500 text-amber-500' : 'text-slate-400'
                }`}
              />
              <span className="hidden sm:inline">{isBookmarked ? 'Đã Lưu' : 'Lưu Bài'}</span>
            </button>

            <button
              onClick={() => onToggleCompleteLesson(lesson.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                isCompleted
                  ? 'bg-emerald-600 text-white shadow-xs hover:bg-emerald-700'
                  : 'bg-teal-700 text-white shadow-xs hover:bg-teal-800'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Đã Hoàn Thành' : 'Đánh Dấu Đã Học'}</span>
            </button>

            <button
              onClick={() => onOpenChat(`Em muốn hỏi về Bài ${lesson.number}: ${lesson.title}`)}
              className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Hỏi AI Bài Này</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'theory', label: '1. Lý Thuyết Trọng Tâm', icon: 'fa-solid fa-book-open-reader' },
            { id: 'examples', label: '2. Bài Tập Ví Dụ SGK', icon: 'fa-solid fa-file-lines' },
            { id: 'topics', label: '3. Các Dạng Toán Chuyên Đề', icon: 'fa-solid fa-layer-group' },
            { id: 'practice', label: '4. Luyện Tập Trắc Nghiệm', icon: 'fa-solid fa-pen-to-square' },
            { id: 'flashcards', label: '5. Flashcards Công Thức', icon: 'fa-solid fa-bolt' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-teal-50 hover:text-teal-900'
              }`}
            >
              <i className={tab.icon}></i>
              <span>{tab.label}</span>
              {tab.id === 'practice' && lesson.practiceExercises.length > 0 && (
                <span className="w-4 h-4 rounded-full bg-teal-200 text-teal-900 text-[10px] flex items-center justify-center font-bold">
                  {lesson.practiceExercises.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* TAB 1: LÝ THUYẾT TRỌNG TÂM */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          {/* Key Theories List */}
          <div className="space-y-5">
            {lesson.keyTheories.map((theory, idx) => (
              <div
                key={theory.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden hover:border-teal-300 transition"
              >
                {/* Header */}
                <div className="px-5 py-3.5 bg-gradient-to-r from-teal-50 to-slate-50 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-teal-700 text-white text-xs font-extrabold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm font-bold text-slate-800">{theory.title}</h3>
                  </div>
                  {theory.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 border border-teal-200">
                      {theory.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-3.5">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <MathView content={theory.content} />
                  </p>

                  {/* LaTeX Formula Highlight Box */}
                  {theory.formulaLatex && (
                    <div className="bg-teal-900/5 border border-teal-200 rounded-xl p-4 text-center my-3">
                      <div className="text-xs font-bold text-teal-800 mb-1 flex items-center justify-center gap-1">
                        <i className="fa-solid fa-square-root-variable"></i> Công thức cốt lõi:
                      </div>
                      <div className="text-sm sm:text-base font-medium text-teal-950">
                        <MathView content={`$$${theory.formulaLatex}$$`} />
                      </div>
                    </div>
                  )}

                  {/* Highlight text if any */}
                  {theory.highlight && (
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Ghi nhớ nhanh: </strong>
                        <MathView content={theory.highlight} />
                      </div>
                    </div>
                  )}

                  {/* Note */}
                  {theory.note && (
                    <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 text-xs text-blue-900 flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Chú ý: </strong>
                        <MathView content={theory.note} />
                      </div>
                    </div>
                  )}

                  {/* Interactive Diagram if configured */}
                  {theory.diagramType && (
                    <InteractiveDiagram type={theory.diagramType} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Common Mistakes & Pitfalls */}
          {lesson.commonMistakes.length > 0 && (
            <div className="bg-rose-50/80 rounded-2xl border border-rose-200 p-5 shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-rose-500 text-white rounded-lg">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-rose-900">
                  Các sai lầm & bẫy thường gặp khi giải toán
                </h3>
              </div>
              <ul className="space-y-2 text-xs text-rose-800">
                {lesson.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-bold text-rose-600">•</span>
                    <span><MathView content={mistake} /></span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fun Fact / Em Có Biết? */}
          {lesson.funFact && (
            <div className="bg-gradient-to-r from-teal-800 to-emerald-900 text-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 bg-teal-600 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                  Em Có Biết?
                </span>
              </div>
              <p className="text-xs text-teal-100 leading-relaxed">{lesson.funFact}</p>
            </div>
          )}

          {/* Personal Lesson Note Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-teal-700" />
                <h3 className="text-sm font-bold text-slate-800">Ghi chú cá nhân cho bài học này</h3>
              </div>
              {isNoteSaved && (
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Đã lưu
                </span>
              )}
            </div>
            <textarea
              rows={3}
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Ghi lại mẹo giải, công thức bạn hay quên hoặc lưu ý của thầy cô trên lớp..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition resize-none"
            />
            <div className="mt-2 flex justify-end">
              <button
                onClick={handleSaveNote}
                className="px-4 py-1.5 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-lg transition"
              >
                Lưu Ghi Chú
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BÀI TẬP VÍ DỤ SGK */}
      {activeTab === 'examples' && (
        <div className="space-y-5">
          {lesson.textbookExamples.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-xs">
              <BookOpen className="w-10 h-10 mx-auto text-teal-600 opacity-40 mb-2" />
              <p>Chưa có ví dụ mẫu cụ thể cho bài học này. Bạn có thể hỏi AI Trợ giảng để nhận ví dụ chi tiết!</p>
              <button
                onClick={() => onOpenChat(`Cho em 2 ví dụ mẫu có lời giải chi tiết về: ${lesson.title}`)}
                className="mt-3 px-4 py-2 bg-teal-700 text-white text-xs font-bold rounded-xl"
              >
                Hỏi AI Tạo Ví Dụ Mẫu
              </button>
            </div>
          ) : (
            lesson.textbookExamples.map((example) => {
              const isExpanded = expandedExamples[example.id] ?? true;
              return (
                <div
                  key={example.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden"
                >
                  <button
                    onClick={() => toggleExample(example.id)}
                    className="w-full px-5 py-4 bg-teal-50/60 hover:bg-teal-50 flex items-center justify-between text-left border-b border-teal-100 transition"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-teal-700 text-white rounded-lg text-xs font-bold">
                        Ví Dụ
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">{example.name}</h3>
                    </div>
                    <div className="text-teal-700">
                      {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-5 space-y-4">
                      {/* Problem Statement */}
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 leading-relaxed">
                        <strong className="text-teal-900 block mb-1 text-xs">Đề bài:</strong>
                        <MathView content={example.problem} />
                      </div>

                      {/* Step by Step Breakdown */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Lời giải chi tiết từng bước:
                        </h4>
                        {example.steps.map((st) => (
                          <div
                            key={st.step}
                            className="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl hover:border-teal-300 transition"
                          >
                            <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                              {st.step}
                            </span>
                            <div className="flex-1 text-xs space-y-1">
                              <p className="font-bold text-slate-800">{st.title}</p>
                              {st.math && (
                                <div className="p-2 bg-teal-50/50 rounded-lg text-teal-950 font-medium">
                                  <MathView content={`$$${st.math}$$`} />
                                </div>
                              )}
                              <p className="text-slate-600"><MathView content={st.explanation} /></p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tips */}
                      {example.tips && (
                        <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <strong>Bí quyết giải: </strong>
                            <MathView content={example.tips} />
                          </div>
                        </div>
                      )}

                      {/* Ask AI button for this problem */}
                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() =>
                            onOpenChat(
                              `Giải thích thêm cách giải bài: "${example.name}" - ${example.problem}`
                            )
                          }
                          className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Hỏi AI phương pháp giải khác</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}

      {/* TAB 3: CÁC DẠNG TOÁN CHUYÊN ĐỀ */}
      {activeTab === 'topics' && (
        <div className="space-y-6">
          {lesson.topicTypes.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-xs">
              <Layers className="w-10 h-10 mx-auto text-teal-600 opacity-40 mb-2" />
              <p className="font-semibold text-slate-700 text-sm mb-1">
                Dạng toán chuyên đề cho Bài {lesson.number}
              </p>
              <p>Bạn có thể nhấn vào nút dưới đây để AI phân tích và tổng hợp các dạng bài tập theo chủ đề này.</p>
              <button
                onClick={() =>
                  onOpenChat(
                    `Hãy tổng hợp các dạng bài tập điển hình của Bài ${lesson.number}: ${lesson.title} kèm phương pháp giải và ví dụ mẫu.`
                  )
                }
                className="mt-4 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 mx-auto"
              >
                <Sparkles className="w-4 h-4" />
                <span>AI Tổng Hợp Dạng Toán</span>
              </button>
            </div>
          ) : (
            lesson.topicTypes.map((topic, i) => (
              <div
                key={topic.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden"
              >
                <div className="px-5 py-3.5 bg-gradient-to-r from-teal-700 to-teal-800 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-teal-600 rounded text-[10px] font-extrabold uppercase">
                      Dạng {i + 1}
                    </span>
                    <h3 className="text-sm font-bold">{topic.title}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <p className="text-xs text-slate-600">{topic.description}</p>

                  {topic.methods.map((m, mi) => (
                    <div key={mi} className="space-y-3">
                      <div className="p-4 bg-teal-50/60 rounded-xl border border-teal-100">
                        <h4 className="text-xs font-bold text-teal-900 mb-2">
                          <i className="fa-solid fa-list-check mr-1.5"></i> {m.name}:
                        </h4>
                        <div className="space-y-1.5 text-xs text-slate-700">
                          {m.steps.map((step, si) => (
                            <p key={si}><MathView content={step} /></p>
                          ))}
                        </div>
                      </div>

                      {/* Model Example */}
                      {m.example && (
                        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                          <div className="font-bold text-slate-800">
                            <strong>Bài toán mẫu: </strong>
                            <MathView content={m.example.problem} />
                          </div>
                          <div className="p-3 bg-white rounded-lg border border-slate-200 text-slate-700">
                            <strong className="text-teal-800 block mb-1">Lời giải:</strong>
                            <MathView content={m.example.solution} />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* TAB 4: LUYỆN TẬP TRẮC NGHIỆM & TỰ LUẬN */}
      {activeTab === 'practice' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-sm font-bold text-teal-950">Bộ bài tập củng cố & Luyện giải</h3>
              <p className="text-xs text-teal-700">
                Làm bài trực tiếp, nhận kết quả và lời giải từng bước ngay lập tức.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs bg-teal-700 text-white font-bold px-3 py-1 rounded-lg">
                {lesson.practiceExercises.length} Câu hỏi
              </span>
            </div>
          </div>

          <div className="space-y-5">
            {lesson.practiceExercises.map((exercise, index) => {
              const selectedOption = userAnswers[exercise.id];
              const isAnswered = selectedOption !== undefined;
              const isCorrect = selectedOption === exercise.correctOption;
              const isSolutionOpen = showSolution[exercise.id];
              const isHintOpen = showHint[exercise.id];

              return (
                <div
                  key={exercise.id}
                  className={`bg-white rounded-2xl border transition overflow-hidden shadow-2xs ${
                    isAnswered
                      ? isCorrect
                        ? 'border-emerald-300 ring-1 ring-emerald-200'
                        : 'border-rose-300 ring-1 ring-rose-200'
                      : 'border-slate-200'
                  }`}
                >
                  {/* Exercise Header */}
                  <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-teal-800 text-white text-xs font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-800">{exercise.code}</span>
                      <span className="text-[11px] font-medium text-slate-500">• {exercise.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          exercise.level === 'Nhận biết'
                            ? 'bg-blue-100 text-blue-800'
                            : exercise.level === 'Thông hiểu'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {exercise.level}
                      </span>
                    </div>
                  </div>

                  {/* Problem Content */}
                  <div className="p-5 space-y-4">
                    <div className="text-sm text-slate-800 leading-relaxed font-medium">
                      <MathView content={exercise.problem} />
                    </div>

                    {/* Multiple Choice Options */}
                    {exercise.type === 'trac_nghiem' && exercise.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {exercise.options.map((opt, optIndex) => {
                          const isThisSelected = selectedOption === optIndex;
                          const isThisCorrect = optIndex === exercise.correctOption;

                          let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700';
                          if (isAnswered) {
                            if (isThisCorrect) {
                              btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                            } else if (isThisSelected) {
                              btnStyle = 'bg-rose-50 border-rose-400 text-rose-900 font-bold';
                            }
                          }

                          return (
                            <button
                              key={optIndex}
                              onClick={() => handleSelectOption(exercise, optIndex)}
                              className={`p-3 rounded-xl border text-left text-xs transition flex items-center justify-between ${btnStyle}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full border flex items-center justify-center font-bold text-[10px]">
                                  {String.fromCharCode(65 + optIndex)}
                                </span>
                                <span><MathView content={opt} /></span>
                              </div>
                              {isAnswered && isThisCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Hint Box */}
                    {exercise.hint && isHintOpen && (
                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <div>
                          <strong>Gợi ý: </strong>
                          <MathView content={exercise.hint} />
                        </div>
                      </div>
                    )}

                    {/* Solution Reveal */}
                    {isSolutionOpen && (
                      <div className="p-4 bg-teal-50/70 rounded-xl border border-teal-200 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-teal-900 flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-teal-700" />
                            Lời giải chi tiết:
                          </span>
                        </div>
                        <div className="text-slate-800 leading-relaxed whitespace-pre-line">
                          <MathView content={exercise.solution} />
                        </div>
                      </div>
                    )}

                    {/* Actions Toolbar */}
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 flex-wrap gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        {exercise.hint && !isHintOpen && (
                          <button
                            onClick={() => setShowHint((prev) => ({ ...prev, [exercise.id]: true }))}
                            className="text-amber-700 hover:text-amber-800 font-semibold flex items-center gap-1"
                          >
                            <Lightbulb className="w-3.5 h-3.5" /> Xem Gợi Ý
                          </button>
                        )}
                        <button
                          onClick={() =>
                            setShowSolution((prev) => ({
                              ...prev,
                              [exercise.id]: !prev[exercise.id],
                            }))
                          }
                          className="text-teal-700 hover:text-teal-900 font-semibold flex items-center gap-1"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          {isSolutionOpen ? 'Ẩn Lời Giải' : 'Xem Lời Giải'}
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          onOpenChat(
                            `Hãy hướng dẫn chi tiết từng bước cách giải bài tập này: "${exercise.problem}"`
                          )
                        }
                        className="text-teal-700 hover:text-teal-900 font-bold flex items-center gap-1"
                      >
                        <Sparkles className="w-3.5 h-3.5" /> Hỏi AI Giải Chi Tiết
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 5: FLASHCARDS CÔNG THỨC */}
      {activeTab === 'flashcards' && (
        <div className="space-y-6 max-w-xl mx-auto">
          {lesson.flashcards.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-xs">
              <p>Chưa có flashcard cho bài này. Hãy ôn tập trong phần Lý thuyết nhé!</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>
                  Thẻ {activeFlashcardIndex + 1} / {lesson.flashcards.length}
                </span>
                <span className="font-bold text-teal-800">{currentFlashcard.tag}</span>
              </div>

              {/* Flip Card */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={`min-h-[220px] p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center shadow-sm relative ${
                  isFlipped
                    ? 'bg-gradient-to-br from-teal-800 to-emerald-900 text-white border-teal-700'
                    : 'bg-white text-slate-800 border-teal-200 hover:border-teal-400'
                }`}
              >
                <span className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 font-semibold">
                  {isFlipped ? 'Mặt sau (Lời giải)' : 'Nhấp để lật thẻ ↻'}
                </span>

                <div className="text-base sm:text-lg font-bold">
                  {isFlipped ? (
                    <MathView content={currentFlashcard.back} />
                  ) : (
                    <MathView content={currentFlashcard.front} />
                  )}
                </div>
              </div>

              {/* Flashcard Controls */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  disabled={activeFlashcardIndex === 0}
                  onClick={() => {
                    setActiveFlashcardIndex((prev) => Math.max(0, prev - 1));
                    setIsFlipped(false);
                  }}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 disabled:opacity-40"
                >
                  ← Thẻ Trước
                </button>

                <button
                  onClick={() => onToggleFlashcardLearned(currentFlashcard.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                    isCardLearned
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-teal-700 text-white hover:bg-teal-800'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{isCardLearned ? 'Đã Thuộc Thẻ Này' : 'Đánh Dấu Đã Thuộc'}</span>
                </button>

                <button
                  disabled={activeFlashcardIndex === lesson.flashcards.length - 1}
                  onClick={() => {
                    setActiveFlashcardIndex((prev) =>
                      Math.min(lesson.flashcards.length - 1, prev + 1)
                    );
                    setIsFlipped(false);
                  }}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700 disabled:opacity-40"
                >
                  Thẻ Tiếp →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Next Lesson Button Footer */}
      {onSelectNextLesson && (
        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Hoàn thành bài học để mở khóa kiến thức tiếp theo</span>
          <button
            onClick={onSelectNextLesson}
            className="px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition"
          >
            <span>Bài Học Tiếp Theo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LessonDetail;
