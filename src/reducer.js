const initialState = {
    todos: []
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, { text: action.payload, completed: false }]
        };
      case 'REMOVE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;