import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");

const initialState = {
  value: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(increment, (state, action) => {
    state.value = state.value + 1;
  });
  builder.addCase(decrement, (state, action) => {
    state.value = state.value - 1;
  });
});

export { increment, decrement };

export default reducer;
