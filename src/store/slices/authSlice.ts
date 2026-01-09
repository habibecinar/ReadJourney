import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { authApi } from '@services/authApi';
import { AuthState, RegisterData, LoginData, AuthResponse } from '@/types/auth.types';
import { STORAGE_KEYS } from '@utils/constants';

const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
const userStr = localStorage.getItem(STORAGE_KEYS.USER);
const user = userStr ? JSON.parse(userStr) : null;

const initialState: AuthState = {
  user: user,
  token: token,
  isAuthenticated: !!token,
  isLoading: false,
  error: null,
};

export const register = createAsyncThunk<AuthResponse, RegisterData>(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.register(data);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      return rejectWithValue(errorMessage);
    }
  }
);

export const login = createAsyncThunk<AuthResponse, LoginData>(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await authApi.login(data);
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      return rejectWithValue(errorMessage);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await authApi.logout();
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Logout failed';
    return rejectWithValue(errorMessage);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.user = { _id: '', name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem(STORAGE_KEYS.TOKEN, action.payload.token);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(state.user));
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.isLoading = false;
        state.user = { _id: '', name: action.payload.name, email: action.payload.email };
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem(STORAGE_KEYS.TOKEN, action.payload.token);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(state.user));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem(STORAGE_KEYS.TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER);
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
