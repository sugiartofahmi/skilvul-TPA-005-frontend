import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
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
    filterBy: "ALL",
  },

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().getTime(),
        todo: action.payload.todo,
        completed: false,
      };
      state.todos = [...state.todos, newTodo];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },

    compledeTodo: (state, action) => {
      state.todos = state.todos.map((el) =>
        el.id == action.payload.id ? { ...el, completed: !el.completed } : el
      );
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((el) =>
        el.id == action.payload.id ? { ...el, todo: action.payload.todo } : el
      );
    },
    updateFilter: (state, action) => {
      // state.todos = state.todos.map((el) =>
      //   el.id == action.payload.id ? { ...el, todo: action.payload.todo } : el
      // );
      state.filterBy = action.payload.filterBy;
    },
  },
});

export const { addTodo, deleteTodo, compledeTodo, updateTodo, updateFilter } =
  todosSlice.actions;

export default todosSlice.reducer;
