import { Chapter } from '../types';
import { chapter1, chapter2, chapter3, chapter4, chapter5 } from './chaptersVolume1';
import { chapter6, chapter7, chapter8, chapter9, chapter10 } from './chaptersVolume2';

export const allChapters: Chapter[] = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
  chapter6,
  chapter7,
  chapter8,
  chapter9,
  chapter10,
];

export const getChaptersByVolume = (volume: 1 | 2): Chapter[] => {
  return allChapters.filter((c) => c.volume === volume);
};

export const getLessonById = (lessonId: string) => {
  for (const chapter of allChapters) {
    const lesson = chapter.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      return { lesson, chapter };
    }
  }
  return null;
};
