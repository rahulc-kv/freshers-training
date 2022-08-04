import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todoSliceList",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.todoList.push({ id: Math.random(), value: action.payload });
    },
    removeFromList: (state, action) => {
      state.todoList = state.todoList.filter((list) => list.id !== action.payload)
    },
  },
});

export const { addToList, removeFromList } = todoSlice.actions;
export default todoSlice.reducer;