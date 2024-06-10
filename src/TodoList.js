import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';

const TodoList = () => {
  
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    console.log(todos);

  const handleAddTodo = () => {
    const text = prompt('Enter todo:');
    dispatch(addTodo(text));
  };

  return (
    <div>
        <h1>Redux-Toolkit</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;