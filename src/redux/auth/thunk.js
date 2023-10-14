import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCurrenUser, login, logout } from './auth-service';

export const loginThunk = createAsyncThunk('auth/login', async body => {
  return await login(body);
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  return await logout();
});

export const getCurrentUserThunk = createAsyncThunk(
  'auth/current',
  async () => {
    return await getCurrenUser();
  }
);
