import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6525798a67cfb1e59ce755a1.mockapi.io',
  }),
  endpoints: builder => ({
    fetchContacts: builder.query({ query: () => 'contacts' }),
  }),
});
export const { useFetchContactsQuery } = contactsAPI;
