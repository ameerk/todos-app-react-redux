import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodos from "./containers/todos";
import TodosList from "./containers/todosList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodos />
        <hr />
        <TodosList />
      </div>
    );
  }
}

export default App;
