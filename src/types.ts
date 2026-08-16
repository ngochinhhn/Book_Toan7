export type StudyVolume = 1 | 2;

export type ExerciseLevel = 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
export type ExerciseType = 'trac_nghiem' | 'tu_luan';

export interface ExerciseStep {
  step: number;
  title: string;
  math?: string;
  explanation: string;
}

export interface Exercise {
  id: string;
  code: string;
  title: string;
  level: ExerciseLevel;
  type: ExerciseType;
  problem: string;
  options?: string[];
  correctOption?: number;
  solution: string;
  steps?: ExerciseStep[];
  hint?: string;
  bookPage?: number;
  topicTag?: string;
}

export interface TextbookExample {
  id: string;
  name: string;
  problem: string;
  solution: string;
  steps: ExerciseStep[];
  tips?: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  mathFront?: string;
  mathBack?: string;
  tag: string;
}

export interface KeyTheory {
  id: string;
  title: string;
  badge?: string;
  content: string;
  formulaLatex?: string;
  note?: string;
  highlight?: string;
  diagramType?: 'numberLine' | 'parallelLines' | 'triangleAngles' | 'triangleCongruence' | 'triangleCenters' | 'prism3d' | 'box3d' | 'pieChart' | 'probabilityWheel';
}

export interface TopicMethod {
  name: string;
  steps: string[];
  example: {
    problem: string;
    solution: string;
  };
  note?: string;
}

export interface TopicType {
  id: string;
  title: string;
  description: string;
  methods: TopicMethod[];
  practiceExercises: Exercise[];
}

export interface Lesson {
  id: string;
  number: number;
  chapterId: string;
  title: string;
  subtitle: string;
  bookPage: number;
  volume: StudyVolume;
  keyTheories: KeyTheory[];
  textbookExamples: TextbookExample[];
  topicTypes: TopicType[];
  practiceExercises: Exercise[];
  commonMistakes: string[];
  flashcards: Flashcard[];
  funFact?: string;
}

export interface Chapter {
  id: string;
  volume: StudyVolume;
  romanNumeral: string;
  number: number;
  title: string;
  subtitle: string;
  iconName: string;
  color: string;
  bgGradient: string;
  lessons: Lesson[];
}

export interface UserProgress {
  completedLessonIds: string[];
  bookmarkedLessonIds: string[];
  exerciseResults: Record<string, {
    answered: boolean;
    isCorrect: boolean;
    userChoice?: number;
    userText?: string;
    completedAt: string;
  }>;
  lessonNotes: Record<string, string>;
  flashcardsLearned: string[];
  streakDays: number;
  lastActiveDate: string;
  totalStudyMinutes: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

