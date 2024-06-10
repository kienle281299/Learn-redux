import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './action';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    const text = prompt('Enter todo:');
    dispatch(addTodo(text));
  };
  console.log(todos);
  return (
    <div>
      <h1>Redux-Core</h1>
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
}

export default App;
