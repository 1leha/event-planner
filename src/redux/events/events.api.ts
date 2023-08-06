import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventApi = createApi({
  reducerPath: 'events',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63e11c56dd7041cafb4147dc.mockapi.io',
  }),
  tagTypes: ['events'],

  endpoints: builder => ({
    getEvents: builder.query<any[] | [], null>({
      query: () => ({
        method: 'GET',
        url: '/events',
        headers: { 'content-type': 'application/json' },
      }),
      providesTags: ['events'],
    }),
  }),
});

export const { useGetEventsQuery } = eventApi;
