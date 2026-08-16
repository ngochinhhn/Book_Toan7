import React, { useState } from 'react';
import { BookOpen, Sparkles, Flame, CheckCircle2, Bookmark, Search, Award, GraduationCap } from 'lucide-react';
import { StudyVolume, UserProgress } from '../types';

interface NavbarProps {
  currentVolume: StudyVolume;
  onVolumeChange: (vol: StudyVolume) => void;
  userProgress: UserProgress;
  onOpenChat: (initialPrompt?: string) => void;
  onOpenProgress: () => void;
  onOpenHandbook: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalLessonsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentVolume,
  onVolumeChange,
  userProgress,
  onOpenChat,
  onOpenProgress,
  onOpenHandbook,
  searchQuery,
  onSearchChange,
  totalLessonsCount,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const completedCount = userProgress.completedLessonIds.length;
  const progressPercent = Math.min(100, Math.round((completedCount / (totalLessonsCount || 1)) * 100));

  return (
    <header className="sticky top-0 z-30 bg-teal-800 text-white shadow-md border-b border-teal-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-600/80 border border-teal-400/40 flex items-center justify-center text-teal-100 shadow-inner">
              <GraduationCap className="w-6 h-6 text-teal-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                  TOÁN 7 <span className="text-xs px-2 py-0.5 rounded-full bg-teal-600/90 text-teal-100 font-semibold uppercase tracking-wider border border-teal-400/30">KNTT</span>
                </span>
              </div>
              <p className="text-[11px] text-teal-200 hidden sm:block">
                Cẩm nang lý thuyết trọng tâm & Giải bài tập SGK
              </p>
            </div>
          </div>

          {/* Volume Tabs (Tập 1 / Tập 2) */}
          <div className="flex items-center bg-teal-900/60 p-1 rounded-xl border border-teal-700/50">
            <button
              onClick={() => onVolumeChange(1)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                currentVolume === 1
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-teal-200 hover:text-white hover:bg-teal-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tập Một (Chương I - V)</span>
            </button>
            <button
              onClick={() => onVolumeChange(2)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                currentVolume === 2
                  ? 'bg-teal-500 text-white shadow-sm'
                  : 'text-teal-200 hover:text-white hover:bg-teal-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tập Hai (Chương VI - X)</span>
            </button>
          </div>

          {/* Search bar & Actions */}
          <div className="flex items-center gap-2.5">
            {/* Search Input */}
            <div className="relative hidden md:block w-48 lg:w-60">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-teal-300 pointer-events-none" />
              <input
                type="text"
                placeholder="Tìm bài học, công thức..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-teal-900/50 border border-teal-700/60 rounded-lg text-xs text-white placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-teal-900/80 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-teal-300 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Sổ Tay Công Thức */}
            <button
              onClick={onOpenHandbook}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-700/60 hover:bg-teal-700 text-teal-100 text-xs font-medium border border-teal-600 transition"
              title="Tra cứu nhanh toàn bộ công thức Toán 7"
            >
              <i className="fa-solid fa-square-root-variable text-teal-300"></i>
              <span>Sổ Tay Công Thức</span>
            </button>

            {/* Study Streak */}
            <div
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold"
              title={`Chuỗi học tập liên tục: ${userProgress.streakDays} ngày`}
            >
              <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
              <span>{userProgress.streakDays} ngày</span>
            </div>

            {/* Progress Gauge */}
            <button
              onClick={onOpenProgress}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-700/80 hover:bg-teal-600 text-white text-xs font-medium border border-teal-500/40 transition"
              title="Xem tiến độ học tập và thành tích"
            >
              <div className="w-5 h-5 rounded-full bg-teal-950 flex items-center justify-center text-[10px] font-bold text-teal-300">
                {progressPercent}%
              </div>
              <span className="hidden sm:inline">Tiến độ</span>
            </button>

            {/* AI Math Tutor Button */}
            <button
              onClick={() => onOpenChat()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-teal-950 text-xs font-extrabold shadow-sm transition transform active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-teal-950" />
              <span>Hỏi AI Toán 7</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
