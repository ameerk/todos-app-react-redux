import React from "react";
import todosList from ".";

function TodosList(props) {
  const { todos, removeTodo } = props;
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={todo + ":" + index} onClick={() => removeTodo(index)}>
          {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodosList;
