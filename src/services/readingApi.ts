import api from './api';
import {
  ReadingProgress,
  ReadingActivity,
  StartReadingData,
  StopReadingData,
  ReadingStatistics,
} from '@types/reading.types';

export const readingApi = {
  startReading: async (data: StartReadingData): Promise<ReadingProgress> => {
    const response = await api.post<ReadingProgress>('/books/reading/start', data);
    return response.data;
  },

  stopReading: async (data: StopReadingData): Promise<ReadingProgress> => {
    const response = await api.post<ReadingProgress>('/books/reading/finish', data);
    return response.data;
  },

  getReadingProgress: async (bookId: string): Promise<ReadingProgress> => {
    const response = await api.get<ReadingProgress>(`/books/reading/${bookId}`);
    return response.data;
  },

  getReadingActivities: async (bookId: string): Promise<ReadingActivity[]> => {
    const response = await api.get<ReadingActivity[]>(
      `/books/reading/${bookId}/activities`
    );
    return response.data;
  },

  deleteReadingActivity: async (activityId: string): Promise<void> => {
    await api.delete(`/books/reading/${activityId}`);
  },

  getStatistics: async (bookId: string): Promise<ReadingStatistics> => {
    const response = await api.get<ReadingStatistics>(
      `/books/reading/${bookId}/statistics`
    );
    return response.data;
  },
};
