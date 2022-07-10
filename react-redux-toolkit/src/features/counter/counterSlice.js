const { createSlice } = require("@reduxjs/toolkit");

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByValue: (state, actions) => {
      state.count = state.count + actions.payload;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, incrementByValue, decrement, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
