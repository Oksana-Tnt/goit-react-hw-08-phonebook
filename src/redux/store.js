import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { contactsAPI } from './contactsAPI';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    // [contactsAPI.reducerPath]: contactsAPI.reducer,
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsAPI.middleware),
});
