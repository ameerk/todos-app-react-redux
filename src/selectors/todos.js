import { createSelector } from "reselect";
const getTodosFromState = state => state.todos;
export const getTodos = createSelector(
  getTodosFromState,
  todos => todos.map((todo, i) => `${i}:${todo}`)
);
