export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend?: boolean;
}

export interface BookDetails extends Book {
  description?: string;
  genre?: string;
  publishYear?: number;
}

export interface UserBook extends Book {
  status: 'unread' | 'in-progress' | 'done';
  owner: string;
  progress?: ReadingProgress[];
}

export interface ReadingProgress {
  _id: string;
  startPage: number;
  finishPage: number;
  startReading: string;
  finishReading: string;
  speed: number;
  status: string;
}

export interface BooksState {
  recommended: {
    books: Book[];
    totalPages: number;
    currentPage: number;
    isLoading: boolean;
    error: string | null;
  };
  library: {
    books: UserBook[];
    isLoading: boolean;
    error: string | null;
  };
  currentBook: UserBook | null;
  filters: {
    title: string;
    author: string;
    status: 'all' | 'unread' | 'in-progress' | 'done';
  };
}

export interface AddBookData {
  title: string;
  author: string;
  totalPages: number;
  imageUrl?: string;
}

export interface StartReadingData {
  bookId: string;
  page: number;
}

export interface FinishReadingData {
  bookId: string;
  page: number;
}
