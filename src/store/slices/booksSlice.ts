import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { booksApi } from '@services/booksApi';
import {
  BooksState,
  Book,
  BookDetails,
  AddBookData,
  BooksFilter,
  BooksResponse,
} from '@/types/book.types';
import { PAGINATION } from '@utils/constants';

const initialState: BooksState = {
  recommended: [],
  myLibrary: [],
  selectedBook: null,
  isLoading: false,
  error: null,
  pagination: {
    currentPage: PAGINATION.DEFAULT_PAGE,
    totalPages: 0,
    perPage: PAGINATION.DEFAULT_LIMIT,
  },
};

export const fetchRecommended = createAsyncThunk<
  BooksResponse,
  { filters?: BooksFilter; page?: number; limit?: number }
>('books/fetchRecommended', async ({ filters = {}, page = 1, limit = 10 }, { rejectWithValue }) => {
  try {
    const response = await booksApi.getRecommended(filters, { page, limit });
    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch books';
    return rejectWithValue(errorMessage);
  }
});

export const fetchMyLibrary = createAsyncThunk<Book[], string | undefined>(
  'books/fetchMyLibrary',
  async (status, { rejectWithValue }) => {
    try {
      const response = await booksApi.getMyLibrary(status);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch library';
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchBookById = createAsyncThunk<BookDetails, string>(
  'books/fetchBookById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await booksApi.getBookById(id);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch book';
      return rejectWithValue(errorMessage);
    }
  }
);

export const addBook = createAsyncThunk<Book, AddBookData>(
  'books/addBook',
  async (data, { rejectWithValue }) => {
    try {
      const response = await booksApi.addBook(data);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to add book';
      return rejectWithValue(errorMessage);
    }
  }
);

export const removeBook = createAsyncThunk<string, string>(
  'books/removeBook',
  async (id, { rejectWithValue }) => {
    try {
      await booksApi.removeBook(id);
      return id;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to remove book';
      return rejectWithValue(errorMessage);
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearSelectedBook: state => {
      state.selectedBook = null;
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchRecommended.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecommended.fulfilled, (state, action: PayloadAction<BooksResponse>) => {
        state.isLoading = false;
        state.recommended = action.payload.results;
        state.pagination = {
          currentPage: action.payload.page,
          totalPages: action.payload.totalPages,
          perPage: action.payload.perPage,
        };
      })
      .addCase(fetchRecommended.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchMyLibrary.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMyLibrary.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.isLoading = false;
        state.myLibrary = action.payload;
      })
      .addCase(fetchMyLibrary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchBookById.fulfilled, (state, action: PayloadAction<BookDetails>) => {
        state.selectedBook = action.payload;
      })
      .addCase(addBook.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action: PayloadAction<Book>) => {
        state.isLoading = false;
        state.myLibrary.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(removeBook.fulfilled, (state, action: PayloadAction<string>) => {
        state.myLibrary = state.myLibrary.filter(book => book._id !== action.payload);
      });
  },
});

export const { clearSelectedBook, clearError } = booksSlice.actions;
export default booksSlice.reducer;
