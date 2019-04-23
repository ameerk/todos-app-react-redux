import { combineReducers } from "redux";
import todosReducer from "./todo";
import avatarReducer from "./avatar";

const reducers = combineReducers({
  todos: todosReducer,
  avatar: avatarReducer
});

export default reducers;
