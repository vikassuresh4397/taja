import * as actionTypes from './actionTypes';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS:
    
      return {
        ...state,
        todos: action.payload
      };
    case actionTypes.ADD_TODO:
  
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case actionTypes.UPDATE_TODO:
           const updatedTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos
      };
    case actionTypes.DELETE_TODO:
      const filteredTodos = state.todos.filter(todo => todo.id !== action.payload);
      return {
        ...state,
        todos: filteredTodos
      };
    case actionTypes.TOGGLE_TODO:
        const toggledTodos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            status: !todo.status
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: toggledTodos
      };
    default:
      return state;
  }
};

export default todoReducer;
