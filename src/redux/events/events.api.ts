import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IEvents } from 'helpers/interfaces/events';

interface IResponse<T> extends Array<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[] | [];
}

export const eventApi = createApi({
  reducerPath: 'events',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63e11c56dd7041cafb4147dc.mockapi.io',
  }),
  tagTypes: ['events'],

  endpoints: builder => ({
    getEvents: builder.query<IResponse<IEvents>, string | void | null>({
      query: params => ({
        method: 'GET',
        url: `/events?${params}`,
      }),
      providesTags: ['events'],
    }),
  }),
});

export const { useGetEventsQuery } = eventApi;
