import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      todo: "Learn React",
      completed: true,
    },
    {
      id: 2,
      todo: "Learn Redux",
      completed: true,
    },
    {
      id: 3,
      todo: "Learn Docker",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        todo: action.payload.todo,
        completed: false,
      };
      return [...state, newTodo];
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    compledeTodo: (state, action) => {
      return state.map((el) =>
        el.id == action.payload.id ? { ...el, completed: !el.completed } : el
      );
    },
    updateTodo: (state, action) => {
      return state.map((el) =>
        el.id == action.payload.id ? { ...el, todo: action.payload.todo } : el
      );
    },
  },
});

export const { addTodo, deleteTodo, compledeTodo, updateTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
