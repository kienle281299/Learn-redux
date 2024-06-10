// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, removeTodo } from './todoSlice';

// const TodoList = () => {
  
//     const todos = useSelector((state) => state.todos.todos);
//     const dispatch = useDispatch();
//     console.log(todos);

//   const handleAddTodo = () => {
//     const text = prompt('Enter todo:');
//     dispatch(addTodo(text));
//   };

//   return (
//     <div>
//         <h1>Redux-Toolkit</h1>
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo.text}
//             <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;
// ==========
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addNewTodo, deleteTodo } from './todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleAddTodo = () => {
    const text = prompt('Enter todo:');
    if (text.trim()) {
      dispatch(addNewTodo(text.trim()));
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

