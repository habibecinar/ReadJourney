import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { readingApi } from '@services/readingApi';
import {
  ReadingState,
  ReadingProgress,
  ReadingActivity,
  StartReadingData,
  StopReadingData,
  ReadingStatistics,
} from '@/types/reading.types';

const initialState: ReadingState = {
  currentBook: {
    bookId: null,
    progress: null,
    activities: [],
    statistics: null,
  },
  isReading: false,
  isLoading: false,
  error: null,
};

export const startReading = createAsyncThunk<ReadingProgress, StartReadingData>(
  'reading/start',
  async (data, { rejectWithValue }) => {
    try {
      const response = await readingApi.startReading(data);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to start reading';
      return rejectWithValue(errorMessage);
    }
  }
);

export const stopReading = createAsyncThunk<ReadingProgress, StopReadingData>(
  'reading/stop',
  async (data, { rejectWithValue }) => {
    try {
      const response = await readingApi.stopReading(data);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to stop reading';
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchReadingProgress = createAsyncThunk<ReadingProgress, string>(
  'reading/fetchProgress',
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await readingApi.getReadingProgress(bookId);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch progress';
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchActivities = createAsyncThunk<ReadingActivity[], string>(
  'reading/fetchActivities',
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await readingApi.getReadingActivities(bookId);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch activities';
      return rejectWithValue(errorMessage);
    }
  }
);

export const deleteActivity = createAsyncThunk<string, string>(
  'reading/deleteActivity',
  async (activityId, { rejectWithValue }) => {
    try {
      await readingApi.deleteReadingActivity(activityId);
      return activityId;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete activity';
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchStatistics = createAsyncThunk<ReadingStatistics, string>(
  'reading/fetchStatistics',
  async (bookId, { rejectWithValue }) => {
    try {
      const response = await readingApi.getStatistics(bookId);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch statistics';
      return rejectWithValue(errorMessage);
    }
  }
);

const readingSlice = createSlice({
  name: 'reading',
  initialState,
  reducers: {
    setCurrentBook: (state, action: PayloadAction<string | null>) => {
      state.currentBook.bookId = action.payload;
    },
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(startReading.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startReading.fulfilled, (state, action: PayloadAction<ReadingProgress>) => {
        state.isLoading = false;
        state.isReading = true;
        state.currentBook.progress = action.payload;
        state.currentBook.bookId = action.payload.bookId;
      })
      .addCase(startReading.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(stopReading.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(stopReading.fulfilled, (state, action: PayloadAction<ReadingProgress>) => {
        state.isLoading = false;
        state.isReading = false;
        state.currentBook.progress = action.payload;
      })
      .addCase(stopReading.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchReadingProgress.fulfilled, (state, action: PayloadAction<ReadingProgress>) => {
        state.currentBook.progress = action.payload;
        state.isReading = action.payload.status === 'active';
      })
      .addCase(fetchActivities.fulfilled, (state, action: PayloadAction<ReadingActivity[]>) => {
        state.currentBook.activities = action.payload;
      })
      .addCase(deleteActivity.fulfilled, (state, action: PayloadAction<string>) => {
        state.currentBook.activities = state.currentBook.activities.filter(
          activity => activity._id !== action.payload
        );
      })
      .addCase(fetchStatistics.fulfilled, (state, action: PayloadAction<ReadingStatistics>) => {
        state.currentBook.statistics = action.payload;
      });
  },
});

export const { setCurrentBook, clearError } = readingSlice.actions;
export default readingSlice.reducer;
