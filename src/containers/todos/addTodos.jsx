import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function AddTodos(props) {
  console.log(props);
  const [text, setText] = useState("");
  return (
    <div>
      <input type="text" onChange={e => setText(e.target.value)} value={text} />
      <Button
        onClick={() => {
          props.addTodo(text);
          setText("");
        }}
      >
        +
      </Button>
    </div>
  );
}

export default AddTodos;
