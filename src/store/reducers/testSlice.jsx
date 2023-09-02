import { createSlice } from '@reduxjs/toolkit';
import { decrementAsync, incrementAsync } from '../actions/testActions';

const testSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: false,
    fulfilled: false,
  },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase('', (state) => {
        state.loading = true;
        state.fulfilled = false;
      })
      .addDefaultCase('', (state) => {
        state.loading = false;
        state.fulfilled = true;
      })
  },
});

export const { increment, decrement } = testSlice.actions;
export default testSlice;