// import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchTodos = createAsyncThunk(
//     'todos/fetchTodos',
//     async () => {
//       const response = await fetch('http://localhost:4000/todos');
//       const data = await response.json();
//       return data;
//     }
//   );

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: {
//     todos: [] // Thêm todos vào initialState như một mảng
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push({ text: action.payload, completed: false });
//     },
//     removeTodo: (state, action) => {
//         state.todos = state.todos.filter((_, index) => index !== action.payload);
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         state.todos = action.payload;
//       });
//   },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;
// export default todoSlice.reducer;
// ==================================
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchTodos = createAsyncThunk(
//   'todos/fetchTodos',
//   async () => {
//     const response = await fetch('http://localhost:4000/todos');
//     const data = await response.json();
//     return data;
//   }
// );

// export const addNewTodo = createAsyncThunk(
//   'todos/addNewTodo',
//   async (text) => {
//     const response = await fetch('http://localhost:4000/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ text, completed: false }),
//     });
//     const data = await response.json();
//     return data;
//   }
// );

// export const deleteTodo = createAsyncThunk(
//   'todos/deleteTodo',
//   async (id) => {
//     await fetch(`http://localhost:4000/todos/${id}`, {
//       method: 'DELETE',
//     });
//     return id;
//   }
// );

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: {
//     todos: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTodos.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.todos = action.payload;
//       })
//       .addCase(fetchTodos.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addNewTodo.fulfilled, (state, action) => {
//         state.todos.push(action.payload);
//       })
//       .addCase(deleteTodo.fulfilled, (state, action) => {
//         state.todos = state.todos.filter(todo => todo.id !== action.payload);
//       });
//   },
// });

// export default todoSlice.reducer;
// ====

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await fetch('http://localhost:4000/todos');
    const data = await response.json();
    return data;
  }
);

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (text) => {
    const response = await fetch('http://localhost:4000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, completed: false }),
    });
    const data = await response.json();
    return data;
  }
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id) => {
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'DELETE',
    });
    return id;
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;

