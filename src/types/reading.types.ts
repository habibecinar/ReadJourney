export interface ReadingProgress {
  _id: string;
  bookId: string;
  startPage: number;
  endPage: number;
  startDate: string;
  endDate?: string;
  speed?: number;
  status: 'active' | 'inactive' | 'finished';
}

export interface ReadingActivity {
  _id: string;
  date: string;
  pagesRead: number;
  timeSpent: number;
  percentage: number;
}

export interface StartReadingData {
  bookId: string;
  page: number;
}

export interface StopReadingData {
  bookId: string;
  page: number;
}

export interface ReadingStatistics {
  totalPagesRead: number;
  totalTimeSpent: number;
  averageSpeed: number;
  progress: number;
}

export interface ReadingState {
  currentBook: {
    bookId: string | null;
    progress: ReadingProgress | null;
    activities: ReadingActivity[];
    statistics: ReadingStatistics | null;
  };
  isReading: boolean;
  isLoading: boolean;
  error: string | null;
}
