import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './contact-service';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    return await fetchContacts();
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async contacts => {
    return await addContacts(contacts);
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    return await deleteContacts(id);
  }
);
