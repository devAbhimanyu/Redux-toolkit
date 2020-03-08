import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "todo",
  initialState: {
    list: [
      {
        itemId: 1,
        task: "Add the delete functionality",
        completed: false
      }
    ]
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        itemId: state.list.length + 1,
        task: action.payload.todoItem,
        completed: false
      };
      state.list.push(newItem);
    },
    updateList: (state, action) => {
      const { itemIndex } = action.payload;
      const updatedList = state.list.map(item => {
        if (item.itemId === itemIndex) {
          item.completed = !item.completed;
        }
        return item;
      });
      state.list = updatedList;
    },
    removeItem: state => state
  }
});

export const { addItem, updateList } = actions;

export default reducer;
