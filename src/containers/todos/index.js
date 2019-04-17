import { connect } from "react-redux";
import { addTodo } from "../../actionsCreators/todo";
import AddTodos from "./addTodos";

const mapDispatchToProps = { addTodo };

export default connect(
  null,
  mapDispatchToProps
)(AddTodos);
