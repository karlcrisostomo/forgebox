import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  value: number;
};

const counterReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  } as CounterState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterReducer.actions;

export default counterReducer.reducer;
