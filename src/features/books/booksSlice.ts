import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { booksAPI } from '../../services/api/books.api';
import { BooksState, Book, UserBook, AddBookData, StartReadingData, FinishReadingData } from '../../types/book.types';
import { logout } from '../auth/authSlice';

const initialState: BooksState = {
  recommended: {
    books: [],
    totalPages: 0,
    currentPage: 1,
    isLoading: false,
    error: null,
  },
  library: {
    books: [],
    isLoading: false,
    error: null,
  },
  currentBook: null,
  filters: {
    title: '',
    author: '',
    status: 'all',
  },
};

export const fetchRecommendedBooks = createAsyncThunk(
  'books/fetchRecommended',
  async ({ page, limit, title, author }: { page: number; limit: number; title?: string; author?: string }, { rejectWithValue }) => {
    try {
      const response = await booksAPI.getRecommended({ page, limit, title, author });
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch books');
    }
  }
);

export const fetchLibraryBooks = createAsyncThunk(
  'books/fetchLibrary',
  async (_, { rejectWithValue }) => {
    try {
      const response = await booksAPI.getOwnBooks();
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch library');
    }
  }
);

export const addBookToLibrary = createAsyncThunk(
  'books/addBook',
  async (bookData: AddBookData, { rejectWithValue }) => {
    try {
      const response = await booksAPI.addBook(bookData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to add book');
    }
  }
);

export const removeBookFromLibrary = createAsyncThunk(
  'books/removeBook',
  async (bookId: string, { rejectWithValue }) => {
    try {
      await booksAPI.deleteBook(bookId);
      return bookId;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to remove book');
    }
  }
);

export const startReading = createAsyncThunk(
  'books/startReading',
  async ({ bookId, page }: StartReadingData, { rejectWithValue }) => {
    try {
      const response = await booksAPI.startReading(bookId, page);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to start reading');
    }
  }
);

export const finishReading = createAsyncThunk(
  'books/finishReading',
  async ({ bookId, page }: FinishReadingData, { rejectWithValue }) => {
    try {
      const response = await booksAPI.finishReading(bookId, page);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to finish reading');
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<Partial<typeof initialState.filters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setCurrentBook: (state, action: PayloadAction<UserBook | null>) => {
      state.currentBook = action.payload;
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch recommended books
      .addCase(fetchRecommendedBooks.pending, (state) => {
        state.recommended.isLoading = true;
        state.recommended.error = null;
      })
      .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
        state.recommended.isLoading = false;
        state.recommended.books = action.payload.results;
        state.recommended.totalPages = action.payload.totalPages;
        state.recommended.currentPage = action.payload.page;
      })
      .addCase(fetchRecommendedBooks.rejected, (state, action) => {
        state.recommended.isLoading = false;
        state.recommended.error = action.payload as string;
      })
      // Fetch library books
      .addCase(fetchLibraryBooks.pending, (state) => {
        state.library.isLoading = true;
        state.library.error = null;
      })
      .addCase(fetchLibraryBooks.fulfilled, (state, action) => {
        state.library.isLoading = false;
        state.library.books = action.payload;
      })
      .addCase(fetchLibraryBooks.rejected, (state, action) => {
        state.library.isLoading = false;
        state.library.error = action.payload as string;
      })
      // Add book
      .addCase(addBookToLibrary.fulfilled, (state, action) => {
        state.library.books.push(action.payload);
      })
      // Remove book
      .addCase(removeBookFromLibrary.fulfilled, (state, action) => {
        state.library.books = state.library.books.filter((book) => book._id !== action.payload);
      })
      // Start reading
      .addCase(startReading.fulfilled, (state, action) => {
        if (state.currentBook && state.currentBook._id === action.payload._id) {
          state.currentBook = action.payload;
        }
        const bookIndex = state.library.books.findIndex((book) => book._id === action.payload._id);
        if (bookIndex !== -1) {
          state.library.books[bookIndex] = action.payload;
        }
      })
      // Finish reading
      .addCase(finishReading.fulfilled, (state, action) => {
        if (state.currentBook && state.currentBook._id === action.payload._id) {
          state.currentBook = action.payload;
        }
        const bookIndex = state.library.books.findIndex((book) => book._id === action.payload._id);
        if (bookIndex !== -1) {
          state.library.books[bookIndex] = action.payload;
        }
      })
      // Reset state on logout
      .addCase(logout.fulfilled, () => initialState)
      .addCase(logout.rejected, () => initialState);
  },
});

export const { setFilters, setCurrentBook, clearFilters } = booksSlice.actions;
export default booksSlice.reducer;
