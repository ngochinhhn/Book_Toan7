import React from 'react';
import {
  Trophy,
  CheckCircle2,
  Bookmark,
  Flame,
  Award,
  BookOpen,
  ArrowRight,
  Sparkles,
  BarChart3,
  Edit3,
  Trash2
} from 'lucide-react';
import { UserProgress, Chapter } from '../types';

interface ProgressDashboardProps {
  userProgress: UserProgress;
  chapters: Chapter[];
  onSelectLesson: (lessonId: string) => void;
  onOpenChat: (prompt: string) => void;
  onResetProgress: () => void;
}

export const ProgressDashboard: React.FC<ProgressDashboardProps> = ({
  userProgress,
  chapters,
  onSelectLesson,
  onOpenChat,
  onResetProgress,
}) => {
  const allLessons = chapters.flatMap((ch) => ch.lessons);
  const totalLessons = allLessons.length;
  const completedCount = userProgress.completedLessonIds.length;
  const progressPercent = Math.min(100, Math.round((completedCount / (totalLessons || 1)) * 100));

  // Calculate quiz statistics
  const exerciseResults = Object.values(userProgress.exerciseResults || {});
  const totalQuizDone = exerciseResults.length;
  const correctQuizDone = exerciseResults.filter((r: any) => r && r.isCorrect).length;
  const quizAccuracy = totalQuizDone > 0 ? Math.round((correctQuizDone / totalQuizDone) * 100) : 0;

  // Bookmarked lessons
  const bookmarkedLessons = allLessons.filter((l) =>
    userProgress.bookmarkedLessonIds.includes(l.id)
  );

  // Lesson notes list
  const notesEntries = Object.entries(userProgress.lessonNotes || {}).filter(
    ([_, text]: [string, any]) => typeof text === 'string' && text.trim().length > 0
  );

  // Achievements/Badges
  const badges = [
    {
      id: 'b1',
      title: 'Nhập Môn Toán 7',
      desc: 'Hoàn thành bài học đầu tiên',
      icon: 'fa-solid fa-seedling',
      unlocked: completedCount >= 1,
      color: 'bg-emerald-500',
    },
    {
      id: 'b2',
      title: 'Chuyên Gia Số Hữu Tỉ',
      desc: 'Hoàn thành toàn bộ Chương 1',
      icon: 'fa-solid fa-divide',
      unlocked: chapters[0]?.lessons.every((l) => userProgress.completedLessonIds.includes(l.id)),
      color: 'bg-teal-600',
    },
    {
      id: 'b3',
      title: 'Bậc Thầy Hình Học',
      desc: 'Hoàn thành Chương 4 (Tam giác)',
      icon: 'fa-solid fa-shapes',
      unlocked: chapters[3]?.lessons.every((l) => userProgress.completedLessonIds.includes(l.id)),
      color: 'bg-cyan-600',
    },
    {
      id: 'b4',
      title: 'Thần Đồng Luyện Đề',
      desc: 'Đạt độ chính xác trắc nghiệm trên 80%',
      icon: 'fa-solid fa-trophy',
      unlocked: totalQuizDone >= 5 && quizAccuracy >= 80,
      color: 'bg-amber-500',
    },
    {
      id: 'b5',
      title: 'Siêu Cần Cù',
      desc: 'Đạt chuỗi học tập 3 ngày liên tục',
      icon: 'fa-solid fa-fire',
      unlocked: userProgress.streakDays >= 3,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="flex-1 bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-teal-100 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-md">
              <Trophy className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Bảng Tiến Độ & Thành Tích Học Tập
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                Theo dõi quá trình chinh phục toàn bộ chương trình Toán 7 KNTT
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              onOpenChat(
                `Dựa trên tiến độ em đã hoàn thành ${completedCount}/${totalLessons} bài học và độ chính xác bài tập ${quizAccuracy}%, hãy lập cho em một kế hoạch ôn tập hiệu quả trong tuần tới.`
              )
            }
            className="px-4 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-xs font-bold rounded-xl shadow-xs transition flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Lập Kế Hoạch Ôn Tập</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
          <div className="p-4 bg-teal-50/70 border border-teal-100 rounded-2xl">
            <div className="text-xs font-bold text-teal-800 mb-1">Bài đã học</div>
            <div className="text-2xl font-black text-teal-950">
              {completedCount} <span className="text-xs font-normal text-teal-700">/ {totalLessons} bài</span>
            </div>
            <div className="w-full bg-teal-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-teal-700 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl">
            <div className="text-xs font-bold text-emerald-800 mb-1">Độ chính xác Quiz</div>
            <div className="text-2xl font-black text-emerald-950">
              {quizAccuracy}%
            </div>
            <p className="text-[10px] text-emerald-700 mt-1">
              Đúng {correctQuizDone} / {totalQuizDone} câu đã làm
            </p>
          </div>

          <div className="p-4 bg-amber-50/70 border border-amber-100 rounded-2xl">
            <div className="text-xs font-bold text-amber-800 mb-1">Chuỗi học tập</div>
            <div className="text-2xl font-black text-amber-950 flex items-center gap-1">
              <Flame className="w-6 h-6 text-amber-500 fill-amber-500" />
              <span>{userProgress.streakDays} ngày</span>
            </div>
            <p className="text-[10px] text-amber-700 mt-1">Chăm chỉ học mỗi ngày</p>
          </div>

          <div className="p-4 bg-purple-50/70 border border-purple-100 rounded-2xl">
            <div className="text-xs font-bold text-purple-800 mb-1">Flashcards thuộc</div>
            <div className="text-2xl font-black text-purple-950">
              {userProgress.flashcardsLearned.length} <span className="text-xs font-normal text-purple-700">thẻ</span>
            </div>
            <p className="text-[10px] text-purple-700 mt-1">Ghi nhớ công thức</p>
          </div>
        </div>
      </div>

      {/* Badges / Huy Hiệu Thành Tích */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
        <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          <span>Huy Hiệu & Danh Hiệu Đã Đạt</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`p-4 rounded-2xl border flex items-center gap-3.5 transition ${
                badge.unlocked
                  ? 'bg-slate-50 border-teal-200'
                  : 'bg-slate-50/40 border-slate-200 opacity-50 grayscale'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-white text-base shadow-xs shrink-0 ${
                  badge.unlocked ? badge.color : 'bg-slate-400'
                }`}
              >
                <i className={badge.icon}></i>
              </div>
              <div className="min-w-0">
                <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  {badge.title}
                  {badge.unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </h3>
                <p className="text-[11px] text-slate-500 line-clamp-1">{badge.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bookmarked Lessons */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
        <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-amber-500 fill-amber-500" />
          <span>Bài Học Đã Lưu ({bookmarkedLessons.length})</span>
        </h2>
        {bookmarkedLessons.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-6">
            Bạn chưa lưu bài học nào. Nhấn biểu tượng dấu trang ở góc trên bài học để lưu lại bài cần ôn tập kĩ!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bookmarkedLessons.map((l) => (
              <div
                key={l.id}
                onClick={() => onSelectLesson(l.id)}
                className="p-3.5 bg-slate-50 hover:bg-teal-50/60 border border-slate-200 hover:border-teal-300 rounded-xl cursor-pointer flex items-center justify-between transition"
              >
                <div className="min-w-0">
                  <span className="text-[10px] font-bold text-teal-700">Bài {l.number}</span>
                  <h3 className="text-xs font-bold text-slate-800 truncate">{l.title}</h3>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Study Notes */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
        <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-teal-700" />
          <span>Ghi Chú Học Tập Của Tôi ({notesEntries.length})</span>
        </h2>
        {notesEntries.length === 0 ? (
          <p className="text-xs text-slate-400 text-center py-6">
            Bạn chưa có ghi chú nào. Hãy mở bất kì bài học nào và ghi lại những lưu ý quan trọng!
          </p>
        ) : (
          <div className="space-y-3">
            {notesEntries.map(([lessonId, noteText]) => {
              const matchedLesson = allLessons.find((l) => l.id === lessonId);
              return (
                <div key={lessonId} className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-teal-800">
                      Bài {matchedLesson?.number}: {matchedLesson?.title}
                    </span>
                    <button
                      onClick={() => onSelectLesson(lessonId)}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1"
                    >
                      <span>Vào bài học</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-700 whitespace-pre-line bg-white p-3 rounded-lg border border-slate-100">
                    {noteText}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Danger Zone: Reset Progress */}
      <div className="pt-4 flex justify-end">
        <button
          onClick={() => {
            if (window.confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ học tập không?')) {
              onResetProgress();
            }
          }}
          className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 font-semibold transition"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Đặt lại dữ liệu tiến độ</span>
        </button>
      </div>
    </div>
  );
};

export default ProgressDashboard;
