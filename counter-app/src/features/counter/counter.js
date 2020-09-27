import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

const initialState = {
  value: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state) => {
    state.value = state.value + 1;
  });
  builder.addCase(decrement, (state) => {
    state.value = state.value - 1;
  });
});

export { increment, decrement };

export default reducer;
