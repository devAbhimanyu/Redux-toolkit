import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getList } from "../../api/todoApi";

const initialState = {
  todoList: [],
  currentRequestId: "",
  loading: "fin",
  error: "",
};

export const fetchToDoList = createAsyncThunk(
  "todo/fetchList",
  async (_, { rejectWithValue }) => {
    try {
      const list = await getList();
      return list;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

const { actions, reducer } = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        itemId: state.list.length + 1,
        task: action.payload.todoItem,
        completed: false,
      };
      state.list.push(newItem);
    },
    updateList: (state, action) => {
      const { itemIndex } = action.payload;
      const updatedList = state.list.map((item) => {
        if (item.itemId === itemIndex) {
          item.completed = !item.completed;
        }
        return item;
      });
      state.list = updatedList;
    },
    removeItem: (state) => state,
  },
  extraReducers: {
    [fetchToDoList.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.todoList = payload;
        state.loading = "fin";
        state.currentRequestId = "";
      }
    },
    [fetchToDoList.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = "pending";
    },
    [fetchToDoList.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = "fin";
        state.todoList = payload;
        state.error = error;
      }
    },
  },
});

export const { addItem, updateList } = actions;

export default reducer;
