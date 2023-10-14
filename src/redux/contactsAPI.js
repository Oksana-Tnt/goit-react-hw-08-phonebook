import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { instance } from './auth/auth-service';

export const contactsAPI = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    //baseUrl: 'https://6525798a67cfb1e59ce755a1.mockapi.io',
    //baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query: id => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts`,
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});
export const {
  useFetchContactsQuery,
  useDeleteContactsMutation,
  useAddContactsMutation,
} = contactsAPI;
