import { connect } from "react-redux";
import AddTodoButton from "./AddTodo";

const Todos = ({ todos }) => {
  return (
    <>
      <h1>Todo List</h1>
      {todos.length === 0 && <AddTodoButton />}
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(Todos);
