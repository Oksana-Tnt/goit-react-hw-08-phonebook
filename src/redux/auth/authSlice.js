import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from 'redux/auth/initialState';
import {
  fetchCurrenUserThunk,
  loginThunk,
  logoutThunk,
  signUpThunk,
} from './thunk';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};
const customActions = [signUpThunk, logoutThunk, loginThunk];
const getCustomActions = status => {
  return customActions.map(el => el[status]);
};

const handlePending = state => {
  state.isLoading = true;
  state.authError = !state.authError;
};

const handleRejected = state => {
  state.isLoading = false;
  state.authError = true;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
        state.authError = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
        state.authError = false;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrenUserThunk.pending, state => {
        state.isRefreshed = true;
      })
      .addCase(fetchCurrenUserThunk.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
        state.isRefreshing = true;
        state.isRefreshed = false;
      })
      .addCase(fetchCurrenUserThunk.rejected, state => {
        state.isRefreshed = false;
      })

      .addMatcher(
        isAnyOf(...getCustomActions(defaultStatus.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...getCustomActions(defaultStatus.rejected)),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
