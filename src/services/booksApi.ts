import api from './api';
import {
  Book,
  BookDetails,
  AddBookData,
  BooksFilter,
  PaginationParams,
  BooksResponse,
} from '@types/book.types';

export const booksApi = {
  getRecommended: async (
    filters: BooksFilter = {},
    pagination: PaginationParams
  ): Promise<BooksResponse> => {
    const response = await api.get<BooksResponse>('/books/recommend', {
      params: { ...filters, ...pagination },
    });
    return response.data;
  },

  getMyLibrary: async (status?: string): Promise<Book[]> => {
    const response = await api.get<Book[]>('/books/own', {
      params: status ? { status } : {},
    });
    return response.data;
  },

  getBookById: async (id: string): Promise<BookDetails> => {
    const response = await api.get<BookDetails>(`/books/${id}`);
    return response.data;
  },

  addBook: async (data: AddBookData): Promise<Book> => {
    const response = await api.post<Book>('/books/add', data);
    return response.data;
  },

  removeBook: async (id: string): Promise<void> => {
    await api.delete(`/books/remove/${id}`);
  },
};
