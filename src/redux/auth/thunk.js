import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCurrenUser, login, logout, signUp } from './auth-service';
import { token } from 'redux/services';

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (body, thunkAPI) => {
    try {
      return await signUp(body);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',

  async (body, thunkAPI) => {
    try {
      return await login(body);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  return await logout();
});

export const fetchCurrenUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) return thunkAPI.rejectWithValue();
    token.set(persistedToken);
    return await fetchCurrenUser();
  }
);
