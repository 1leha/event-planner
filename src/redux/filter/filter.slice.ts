import { createSlice } from '@reduxjs/toolkit';

let initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    inputFilterReducer(_, { payload }) {
      return payload;
    },
    clearFilterReducer() {
      return '';
    },
  },
});

export const { inputFilterReducer, clearFilterReducer } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
