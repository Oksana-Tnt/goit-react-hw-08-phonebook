import { createSlice } from '@reduxjs/toolkit';
import avatarImg from '../../images/avatar.jpg';

const avatarSlice = createSlice({
  name: 'avatar',
  initialState: {
    preview: avatarImg,
  },
  reducers: {
    uploadAvatar: (state, action) => {
      if (action.payload === null) {
        state.preview = avatarImg;
        return;
      }
      state.preview = action.payload;
    },
    deleteAvatar: state => {
      state.preview = avatarImg;
    },
  },
});

export const { uploadAvatar, deleteAvatar } = avatarSlice.actions;
export const avatarReducer = avatarSlice.reducer;
