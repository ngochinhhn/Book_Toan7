import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Navbar,
  Sidebar,
  LessonDetail,
  TopicSummaryView,
  FormulaHandbook,
  ProgressDashboard,
  ChatbotModal,
} from './components';
import { allChapters, getChaptersByVolume, getLessonById } from './data/curriculumData';
import { StudyVolume, UserProgress, Chapter, Lesson } from './types';
import {
  Sparkles,
  BookOpen,
  Layers,
  Award,
  ChevronRight,
  Menu,
  X,
  GraduationCap,
  Flame,
  Search,
} from 'lucide-react';

const LOCAL_STORAGE_KEY = 'toan7_kntt_user_progress_v2';

const INITIAL_PROGRESS: UserProgress = {
  completedLessonIds: [],
  bookmarkedLessonIds: [],
  exerciseResults: {},
  lessonNotes: {},
  flashcardsLearned: [],
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  totalStudyMinutes: 15,
};

export default function App() {
  // Volume State (Tập 1: Chương 1-5, Tập 2: Chương 6-10)
  const [currentVolume, setCurrentVolume] = useState<StudyVolume>(1);

  // Active View: 'lesson' | 'topicSummary' | 'handbook' | 'progress'
  const [activeView, setActiveView] = useState<'lesson' | 'topicSummary' | 'handbook' | 'progress'>('lesson');

  // Selected Lesson ID (default to first lesson in Volume 1: bai-1)
  const [selectedLessonId, setSelectedLessonId] = useState<string>('bai-1');

  // Search Query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Mobile Sidebar Drawer Open State
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // AI Chatbot Modal State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialPrompt, setChatInitialPrompt] = useState<string | undefined>(undefined);

  // User Progress state with LocalStorage persistence
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Check streak on load
        const today = new Date().toISOString().split('T')[0];
        const lastActive = parsed.lastActiveDate || today;

        let newStreak = parsed.streakDays || 1;
        if (lastActive !== today) {
          const lastDate = new Date(lastActive);
          const currentDate = new Date(today);
          const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));

          if (diffDays === 1) {
            newStreak += 1;
          } else if (diffDays > 1) {
            newStreak = 1;
          }
        }

        return {
          ...INITIAL_PROGRESS,
          ...parsed,
          streakDays: newStreak,
          lastActiveDate: today,
        };
      }
    } catch (e) {
      console.warn('Failed to load user progress from localStorage:', e);
    }
    return INITIAL_PROGRESS;
  });

  // Save progress to LocalStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userProgress));
    } catch (e) {
      console.warn('Failed to save progress to localStorage:', e);
    }
  }, [userProgress]);

  // Filter chapters based on active volume
  const currentVolumeChapters = useMemo(() => {
    return getChaptersByVolume(currentVolume);
  }, [currentVolume]);

  // Find active lesson and chapter with robust fallback
  const currentLessonData = useMemo(() => {
    const found = getLessonById(selectedLessonId);
    if (found) return found;
    // Fallback to first lesson in current volume
    if (currentVolumeChapters.length > 0 && currentVolumeChapters[0].lessons.length > 0) {
      return {
        lesson: currentVolumeChapters[0].lessons[0],
        chapter: currentVolumeChapters[0],
      };
    }
    // Final fallback to first chapter first lesson
    return {
      lesson: allChapters[0].lessons[0],
      chapter: allChapters[0],
    };
  }, [selectedLessonId, currentVolumeChapters]);

  // If active lesson is in another volume when switching volume, update selected lesson
  const handleVolumeChange = (vol: StudyVolume) => {
    setCurrentVolume(vol);
    const volChapters = getChaptersByVolume(vol);
    if (volChapters.length > 0 && volChapters[0].lessons.length > 0) {
      // If current selected lesson isn't in this volume, select first lesson of new volume
      const isCurrentInVolume = volChapters.some((ch) =>
        ch.lessons.some((l) => l.id === selectedLessonId)
      );
      if (!isCurrentInVolume) {
        setSelectedLessonId(volChapters[0].lessons[0].id);
      }
    }
  };

  // Switch Lesson Handler
  const handleSelectLesson = (lessonId: string) => {
    const found = getLessonById(lessonId);
    if (found) {
      setSelectedLessonId(lessonId);
      if (found.lesson.volume !== currentVolume) {
        setCurrentVolume(found.lesson.volume);
      }
    }
    setActiveView('lesson');
    setIsMobileSidebarOpen(false);
  };

  // Toggle complete lesson
  const handleToggleCompleteLesson = (lessonId: string) => {
    setUserProgress((prev) => {
      const isAlreadyCompleted = prev.completedLessonIds.includes(lessonId);
      const newCompleted = isAlreadyCompleted
        ? prev.completedLessonIds.filter((id) => id !== lessonId)
        : [...prev.completedLessonIds, lessonId];
      return {
        ...prev,
        completedLessonIds: newCompleted,
      };
    });
  };

  // Toggle bookmark lesson
  const handleToggleBookmarkLesson = (lessonId: string) => {
    setUserProgress((prev) => {
      const isBookmarked = prev.bookmarkedLessonIds.includes(lessonId);
      const newBookmarked = isBookmarked
        ? prev.bookmarkedLessonIds.filter((id) => id !== lessonId)
        : [...prev.bookmarkedLessonIds, lessonId];
      return {
        ...prev,
        bookmarkedLessonIds: newBookmarked,
      };
    });
  };

  // Save exercise result
  const handleSaveExerciseResult = (exerciseId: string, isCorrect: boolean, userChoice?: number) => {
    setUserProgress((prev) => ({
      ...prev,
      exerciseResults: {
        ...prev.exerciseResults,
        [exerciseId]: {
          answered: true,
          isCorrect,
          userChoice,
          completedAt: new Date().toISOString(),
        },
      },
    }));
  };

  // Save lesson note
  const handleSaveLessonNote = (lessonId: string, note: string) => {
    setUserProgress((prev) => ({
      ...prev,
      lessonNotes: {
        ...prev.lessonNotes,
        [lessonId]: note,
      },
    }));
  };

  // Toggle flashcard learned
  const handleToggleFlashcardLearned = (cardId: string) => {
    setUserProgress((prev) => {
      const isLearned = prev.flashcardsLearned.includes(cardId);
      const newLearned = isLearned
        ? prev.flashcardsLearned.filter((id) => id !== cardId)
        : [...prev.flashcardsLearned, cardId];
      return {
        ...prev,
        flashcardsLearned: newLearned,
      };
    });
  };

  // Reset Progress
  const handleResetProgress = () => {
    setUserProgress({
      ...INITIAL_PROGRESS,
      lastActiveDate: new Date().toISOString().split('T')[0],
    });
  };

  // AI Chat Opener
  const handleOpenChat = (prompt?: string) => {
    setChatInitialPrompt(prompt);
    setIsChatOpen(true);
  };

  // Navigate to Next Lesson
  const handleSelectNextLesson = () => {
    const allFlatLessons = allChapters.flatMap((ch) => ch.lessons);
    const currentIndex = allFlatLessons.findIndex((l) => l.id === selectedLessonId);
    if (currentIndex >= 0 && currentIndex < allFlatLessons.length - 1) {
      const nextLesson = allFlatLessons[currentIndex + 1];
      handleSelectLesson(nextLesson.id);
    }
  };

  const totalLessonsCount = useMemo(() => {
    return allChapters.reduce((acc, ch) => acc + ch.lessons.length, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-200 selection:text-teal-900">
      {/* Top Navigation Bar */}
      <Navbar
        currentVolume={currentVolume}
        onVolumeChange={handleVolumeChange}
        userProgress={userProgress}
        onOpenChat={handleOpenChat}
        onOpenProgress={() => setActiveView('progress')}
        onOpenHandbook={() => setActiveView('handbook')}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        totalLessonsCount={totalLessonsCount}
      />

      {/* Mobile Sub-Header Toolbar */}
      <div className="md:hidden flex items-center justify-between px-4 py-2.5 bg-teal-900 text-white border-b border-teal-800">
        <button
          onClick={() => setIsMobileSidebarOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-800/80 hover:bg-teal-700 text-xs font-semibold border border-teal-700 transition"
        >
          <Menu className="w-4 h-4 text-teal-300" />
          <span>Danh sách Chương & Bài</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('topicSummary')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
              activeView === 'topicSummary' ? 'bg-teal-600 text-white' : 'text-teal-200'
            }`}
          >
            Dạng Toán
          </button>
          <button
            onClick={() => setActiveView('handbook')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
              activeView === 'handbook' ? 'bg-teal-600 text-white' : 'text-teal-200'
            }`}
          >
            Công Thức
          </button>
          <button
            onClick={() => setActiveView('progress')}
            className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
              activeView === 'progress' ? 'bg-teal-600 text-white' : 'text-teal-200'
            }`}
          >
            Tiến Độ
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:block shrink-0">
          <Sidebar
            chapters={currentVolumeChapters}
            selectedLessonId={selectedLessonId}
            onSelectLesson={handleSelectLesson}
            userProgress={userProgress}
            activeView={activeView}
            onSelectView={setActiveView}
            searchQuery={searchQuery}
            onOpenChat={handleOpenChat}
          />
        </div>

        {/* Mobile Sidebar Overlay Drawer */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
              onClick={() => setIsMobileSidebarOpen(false)}
            />
            <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10">
              <div className="p-3.5 bg-teal-800 text-white flex items-center justify-between border-b border-teal-900">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-teal-300" />
                  <span className="font-extrabold text-sm">Chương Trình Toán 7</span>
                </div>
                <button
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="p-1 rounded-lg hover:bg-teal-700 text-teal-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <Sidebar
                  chapters={currentVolumeChapters}
                  selectedLessonId={selectedLessonId}
                  onSelectLesson={handleSelectLesson}
                  userProgress={userProgress}
                  activeView={activeView}
                  onSelectView={(v) => {
                    setActiveView(v);
                    setIsMobileSidebarOpen(false);
                  }}
                  searchQuery={searchQuery}
                  onOpenChat={(p) => {
                    handleOpenChat(p);
                    setIsMobileSidebarOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Main View Switcher */}
        <main className="flex-1 overflow-y-auto">
          {activeView === 'lesson' && currentLessonData && (
            <LessonDetail
              lesson={currentLessonData.lesson}
              chapter={currentLessonData.chapter}
              userProgress={userProgress}
              onToggleCompleteLesson={handleToggleCompleteLesson}
              onToggleBookmarkLesson={handleToggleBookmarkLesson}
              onSaveExerciseResult={handleSaveExerciseResult}
              onSaveLessonNote={handleSaveLessonNote}
              onToggleFlashcardLearned={handleToggleFlashcardLearned}
              onOpenChat={handleOpenChat}
              onSelectNextLesson={handleSelectNextLesson}
            />
          )}

          {activeView === 'topicSummary' && (
            <TopicSummaryView
              chapters={allChapters}
              onSelectLesson={handleSelectLesson}
              onOpenChat={handleOpenChat}
            />
          )}

          {activeView === 'handbook' && (
            <FormulaHandbook onOpenChat={handleOpenChat} />
          )}

          {activeView === 'progress' && (
            <ProgressDashboard
              userProgress={userProgress}
              chapters={allChapters}
              onSelectLesson={handleSelectLesson}
              onOpenChat={handleOpenChat}
              onResetProgress={handleResetProgress}
            />
          )}
        </main>
      </div>

      {/* Floating AI Math Assistant Bubble */}
      <button
        onClick={() => handleOpenChat()}
        className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-gradient-to-r from-teal-700 to-emerald-600 hover:from-teal-600 hover:to-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2.5 border border-teal-400/30 group"
        title="Trợ lý AI Gia Sư Toán 7 - Giải đáp & Hướng dẫn 24/7"
      >
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
        </div>
        <span className="text-xs font-extrabold hidden sm:inline tracking-wide">
          Hỏi Gia Sư AI Toán 7
        </span>
      </button>

      {/* AI Chatbot Modal */}
      <ChatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        initialPrompt={chatInitialPrompt}
      />
    </div>
  );
}
