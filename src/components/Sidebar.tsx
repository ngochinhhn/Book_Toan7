import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Bookmark,
  Layers,
  GraduationCap,
  Star,
  Check,
  FileText,
  Search
} from 'lucide-react';
import { Chapter, Lesson, UserProgress } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  selectedLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  userProgress: UserProgress;
  activeView: 'lesson' | 'topicSummary' | 'handbook' | 'progress';
  onSelectView: (view: 'lesson' | 'topicSummary' | 'handbook' | 'progress') => void;
  searchQuery: string;
  onOpenChat: (initialPrompt?: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  chapters,
  selectedLessonId,
  onSelectLesson,
  userProgress,
  activeView,
  onSelectView,
  searchQuery,
  onOpenChat,
}) => {
  // Keep chapters expanded by default
  const [collapsedChapters, setCollapsedChapters] = useState<Record<string, boolean>>({});

  const toggleChapter = (chapterId: string) => {
    setCollapsedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  // Filter lessons based on search query
  const filteredChapters = chapters
    .map((chapter) => {
      const matchingLessons = chapter.lessons.filter(
        (l) =>
          !searchQuery ||
          l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          chapter.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...chapter,
        lessons: matchingLessons,
      };
    })
    .filter((ch) => ch.lessons.length > 0);

  return (
    <aside className="w-full md:w-80 bg-white border-r border-slate-200 flex flex-col h-[calc(100vh-4rem)] sticky top-16 select-none">
      {/* Quick Navigation Tabs */}
      <div className="p-3 border-b border-slate-100 bg-slate-50/70 space-y-1">
        <div className="grid grid-cols-2 gap-1.5">
          <button
            onClick={() => onSelectView('lesson')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
              activeView === 'lesson'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-800 border border-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Bài Học SGK</span>
          </button>
          <button
            onClick={() => onSelectView('topicSummary')}
            className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition ${
              activeView === 'topicSummary'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-teal-50 hover:text-teal-800 border border-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Dạng Toán</span>
          </button>
        </div>
      </div>

      {/* Chapter & Lesson Tree */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {filteredChapters.length === 0 ? (
          <div className="text-center py-8 text-slate-400 text-xs">
            <Search className="w-8 h-8 mx-auto mb-2 opacity-40 text-teal-600" />
            <p>Không tìm thấy bài học nào phù hợp với từ khoá "{searchQuery}".</p>
          </div>
        ) : (
          filteredChapters.map((chapter) => {
            const isCollapsed = !!collapsedChapters[chapter.id];
            const chapterCompletedLessons = chapter.lessons.filter((l) =>
              userProgress.completedLessonIds.includes(l.id)
            ).length;
            const isAllCompleted =
              chapter.lessons.length > 0 && chapterCompletedLessons === chapter.lessons.length;

            return (
              <div
                key={chapter.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:border-teal-300 transition"
              >
                {/* Chapter Header */}
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 hover:bg-teal-50/50 flex items-center justify-between text-left transition border-b border-slate-100"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold ${
                        isAllCompleted
                          ? 'bg-emerald-600 text-white'
                          : 'bg-teal-700 text-teal-50'
                      }`}
                    >
                      {isAllCompleted ? <Check className="w-4 h-4" /> : chapter.number}
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">
                          {chapter.romanNumeral}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          ({chapterCompletedLessons}/{chapter.lessons.length})
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-slate-800 truncate">
                        {chapter.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-slate-400 pl-1">
                    {isCollapsed ? (
                      <ChevronRight className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Lesson List */}
                {!isCollapsed && (
                  <div className="divide-y divide-slate-100">
                    {chapter.lessons.map((lesson) => {
                      const isSelected = activeView === 'lesson' && selectedLessonId === lesson.id;
                      const isCompleted = userProgress.completedLessonIds.includes(lesson.id);
                      const isBookmarked = userProgress.bookmarkedLessonIds.includes(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            onSelectLesson(lesson.id);
                            onSelectView('lesson');
                          }}
                          className={`w-full px-3.5 py-2.5 flex items-start gap-2.5 text-left transition ${
                            isSelected
                              ? 'bg-teal-50 text-teal-900 border-l-4 border-l-teal-600 font-semibold'
                              : 'hover:bg-slate-50/80 text-slate-700'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                            ) : (
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                  isSelected
                                    ? 'border-teal-600 text-teal-700 bg-teal-100 font-bold'
                                    : 'border-slate-300 text-slate-400'
                                }`}
                              >
                                {lesson.number}
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-medium line-clamp-1">
                                Bài {lesson.number}: {lesson.title}
                              </p>
                              {isBookmarked && (
                                <Bookmark className="w-3 h-3 text-amber-500 fill-amber-500 shrink-0 ml-1" />
                              )}
                            </div>
                            <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                              Trang {lesson.bookPage} • {lesson.practiceExercises.length} bài tập
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Assistant Banner */}
      <div className="p-3 bg-gradient-to-r from-teal-800 to-teal-900 text-white border-t border-teal-700">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-1.5 bg-teal-700/80 rounded-lg text-teal-300">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold">Gặp khó khăn bài toán nào?</p>
            <p className="text-[10px] text-teal-200">AI giải đáp chi tiết từng bước</p>
          </div>
        </div>
        <button
          onClick={() => onOpenChat()}
          className="w-full py-1.5 px-3 rounded-lg bg-teal-500 hover:bg-teal-400 text-teal-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-xs"
        >
          <span>Chat Hỏi Gia Sư AI</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
