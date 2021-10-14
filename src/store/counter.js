import { createSlice } from "@reduxjs/toolkit";

const latestinitialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: latestinitialState,
  reducers: {
    increament(state) {
      state.counter++;
    },
    decreament(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

