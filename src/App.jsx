import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddTodos from "./containers/todos";
import TodosList from "./containers/todosList";
import Avatar from "./containers/avatar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar />
        <hr />
        <AddTodos />
        <hr />
        <TodosList />
      </div>
    );
  }
}

export default App;
