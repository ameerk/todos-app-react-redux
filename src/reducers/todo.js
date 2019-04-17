//import

function todosReducer(state = [], action) {
  switch (action.type) {
    case "ADD_TODO": {
      const todo = [...state, action.payload];
      return todo;
    }
    case "REMOVE_TODO": {
      const todo = [...state];
      todo.splice(action.payload, 1);
      return todo;
    }
    default:
      return state;
  }
}

export default todosReducer;
