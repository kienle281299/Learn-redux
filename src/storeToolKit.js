import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
// Tạo Redux store 
const storeToolKit = configureStore({
  reducer: {
    todos: todoReducer
  }
});

export default storeToolKit;