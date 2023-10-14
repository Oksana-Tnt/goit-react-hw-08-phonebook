import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initialState } from 'redux/auth/initialState';
import { getCurrentUserThunk, loginThunk, logoutThunk } from './thunk';

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};
const customActions = [loginThunk, logoutThunk, getCurrentUserThunk];
const getCustomActions = status => {
  return customActions.map(el => el[status]);
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = state => {
  state.isLoading = false;
  state.error = '';
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = true;
        state.token = payload.token;
        state.name = payload.user.name;
        state.error = '';
      })

      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.name = '';
        state.isLoading = false;
        state.token = '';
      })

      .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
        state.name = payload.user.name;
        state.isLoading = true;
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
