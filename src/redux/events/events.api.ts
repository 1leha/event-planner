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
    baseUrl: process.env.REACT_APP_MOKAPI_ENDPOINT,
    // baseUrl: 'https://63e11c56dd7041cafb4147dc.mockapi.io',
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

    getCategories: builder.query<IEvents['category'][], void | null>({
      query: () => ({
        method: 'GET',
        url: `/events`,
      }),
      transformResponse: (response: IEvents[]) =>
        response.map(el => el.category),
      providesTags: ['events'],
    }),

    getEventsLength: builder.query<number, string | void | null>({
      query: params => ({
        method: 'GET',
        url: `/events?${params}`,
      }),
      transformResponse: (response: IEvents[]): number => {
        return response.length;
      },
      providesTags: ['events'],
    }),

    // getEventsLength: builder.query<number, string | void | null>({
    //   query: category => ({
    //     method: 'GET',
    //     url: `/events?category=${category ? category : ''}`,
    //   }),
    //   transformResponse: (response: IEvents[]): number => {
    //     return response.length;
    //   },
    //   providesTags: ['events'],
    // }),

    addEvent: builder.mutation<any, any>({
      query: event => ({
        method: 'POST',
        url: `/events`,
        body: event,
      }),
      invalidatesTags: ['events'],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetCategoriesQuery,
  useAddEventMutation,
  useGetEventsLengthQuery,
} = eventApi;
