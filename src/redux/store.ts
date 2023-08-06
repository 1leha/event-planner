import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filter.slice';
import { useDispatch } from 'react-redux';
import { eventApi } from './events/events.api';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [eventApi.reducerPath]: eventApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),

    eventApi.middleware,
  ],
});

export type TStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
