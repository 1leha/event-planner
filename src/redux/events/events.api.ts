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
    baseUrl:
      process.env.REACT_APP_MOKAPI_ENDPOINT ||
      'https://63e11c56dd7041cafb4147dc.mockapi.io',
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

    getEventbyId: builder.query<IEvents, string | void | null>({
      query: (id: string) => ({
        method: 'GET',
        url: `/events/${id}`,
      }),
      providesTags: ['events'],
    }),

    addEvent: builder.mutation<any, any>({
      query: event => ({
        method: 'POST',
        url: `/events`,
        body: event,
      }),
      invalidatesTags: ['events'],
    }),

    editEvent: builder.mutation<any, any>({
      query: ({ id, data }) => ({
        method: 'PUT',
        url: `/events/${id}`,
        body: data,
      }),
      invalidatesTags: ['events'],
    }),

    deleteEvent: builder.mutation<any, any>({
      query: (id: string) => ({
        method: 'DELETE',
        url: `/events/${id}`,
      }),
      invalidatesTags: ['events'],
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetCategoriesQuery,
  useGetEventsLengthQuery,
  useGetEventbyIdQuery,
  useAddEventMutation,
  useDeleteEventMutation,
  useEditEventMutation,
} = eventApi;
