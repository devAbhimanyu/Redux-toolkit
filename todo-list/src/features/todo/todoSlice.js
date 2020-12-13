import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getList, updateTodo, addTodo } from "../../api/todoApi";

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

export const updateToDo = createAsyncThunk(
  "todo/updateToDo",
  async (todo, { rejectWithValue }) => {
    try {
      const list = await updateTodo(todo);
      return list;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

export const addNewTodo = createAsyncThunk(
  "todo/addNewTodo",
  async (todo, { rejectWithValue }) => {
    try {
      const list = await addTodo(todo);
      return list;
    } catch (err) {
      return rejectWithValue([], err);
    }
  }
);

const { actions, reducer } = createSlice({
  name: "todo",
  initialState,
  reducers: {},
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
    [updateToDo.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.todoList = payload;
        state.loading = "fin";
        state.currentRequestId = "";
      }
    },
    [updateToDo.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = "pending";
    },
    [updateToDo.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = "fin";
        state.todoList = payload;
        state.error = error;
      }
    },
    [addNewTodo.fulfilled]: (state, { meta, payload }) => {
      if (meta.requestId === state.currentRequestId.requestId) {
        state.todoList = payload;
        state.loading = "fin";
        state.currentRequestId = "";
      }
    },
    [addNewTodo.pending]: (state, { meta }) => {
      state.currentRequestId = meta;
      state.loading = "pending";
    },
    [addNewTodo.rejected]: (state, { meta, payload, error }) => {
      if (state.currentRequestId === meta) {
        state.currentRequestId = meta;
        state.loading = "fin";
        state.todoList = payload;
        state.error = error;
      }
    },
  },
});

export default reducer;
