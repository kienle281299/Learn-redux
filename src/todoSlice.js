import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async () => {
      const response = await fetch('http://localhost:4000/todos');
      const data = await response.json();
      return data;
    }
  );

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [] // Thêm todos vào initialState như một mảng
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    removeTodo: (state, action) => {
        state.todos = state.todos.filter((_, index) => index !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;