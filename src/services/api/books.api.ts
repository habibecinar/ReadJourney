import { apiClient } from './api.client';
import { Book, UserBook, AddBookData } from '../../types/book.types';

interface RecommendedBooksResponse {
  results: Book[];
  totalPages: number;
  page: number;
  perPage: number;
}

export const booksAPI = {
  getRecommended: async ({ page = 1, limit = 10, title, author }: { page?: number; limit?: number; title?: string; author?: string }): Promise<RecommendedBooksResponse> => {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });
    
    if (title) params.append('title', title);
    if (author) params.append('author', author);
    
    const { data } = await apiClient.get(`/books/recommend?${params.toString()}`);
    return data;
  },

  getBookById: async (bookId: string): Promise<Book> => {
    const { data } = await apiClient.get(`/books/${bookId}`);
    return data;
  },

  addBook: async (bookData: AddBookData): Promise<UserBook> => {
    const { data } = await apiClient.post('/books/add', bookData);
    return data;
  },

  getOwnBooks: async (): Promise<UserBook[]> => {
    const { data } = await apiClient.get('/books/own');
    return data;
  },

  deleteBook: async (bookId: string): Promise<void> => {
    await apiClient.delete(`/books/remove/${bookId}`);
  },

  startReading: async (bookId: string, page: number): Promise<UserBook> => {
    const { data } = await apiClient.post(`/books/reading/start`, {
      id: bookId,
      page,
    });
    return data;
  },

  finishReading: async (bookId: string, page: number): Promise<UserBook> => {
    const { data } = await apiClient.post(`/books/reading/finish`, {
      id: bookId,
      page,
    });
    return data;
  },

  deleteReading: async (bookId: string, readingId: string): Promise<void> => {
    await apiClient.delete(`/books/reading?id=${bookId}&readingId=${readingId}`);
  },
};
