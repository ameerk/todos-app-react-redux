import { connect } from "react-redux";
import TodosList from "./todosList";
import { removeTodo } from "../../actionsCreators/todo";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = { removeTodo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosList);
