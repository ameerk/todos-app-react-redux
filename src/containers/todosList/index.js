import { connect } from "react-redux";
import TodosList from "./todosList";
import { removeTodo } from "../../actionsCreators/todo";
import { getTodos } from "../../selectors/todos";

const mapStateToProps = state => {
  return {
    todos: getTodos(state)
  };
};

const mapDispatchToProps = { removeTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
