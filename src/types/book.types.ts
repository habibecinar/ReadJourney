export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend?: boolean;
  status?: 'unread' | 'in-progress' | 'done';
}

export interface BookDetails extends Book {
  description?: string;
  category?: string;
  publishYear?: number;
}

export interface AddBookData {
  title: string;
  author: string;
  totalPages: number;
}

export interface BooksFilter {
  title?: string;
  author?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface BooksResponse {
  results: Book[];
  totalPages: number;
  page: number;
  perPage: number;
}

export interface BooksState {
  recommended: Book[];
  myLibrary: Book[];
  selectedBook: BookDetails | null;
  isLoading: boolean;
  error: string | null;
  pagination: {
    currentPage: number;
    totalPages: number;
    perPage: number;
  };
}
