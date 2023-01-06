import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todoActions";

const AddTodo = () => {
  const [todoItem, setTodoItem] = useState({});
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleTodoChange = (event) => {
    const { name, value } = event.target;
    setTodoItem({
      ...todoItem,
      [name]: value === "" ? setError(true) : value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(todoItem));
  };

  return (
    <div className="col-12 col-md-6 offset-md-3">
      {error && (
        <div className="alert alert-danger">Blank value not permitted</div>
      )}
      <form className="form text-left" onSubmit={handleSubmit}>
        <label htmlFor="todoHeading">Title</label>
        <input
          type="text"
          className="form-control"
          name="todoHeading"
          onChange={handleTodoChange}
        />

        <br />
        <label htmlFor="todoDescription">Description</label>
        <div className="form-floating">
          <textarea
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            id="floatingTextarea2"
            name="todoDesctiption"
            className="form-control"
            onChange={handleTodoChange}
          ></textarea>
          <label htmlFor="floatingTextarea2">Comments</label>
        </div>
        <br />
        <input type="checkbox" />
        <label htmlFor="isCompleted" checked>
          Complete
        </label>
        <br />
        <br />
        <button type="submit" className="btn btn-success">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(null, mapDispatchToProps)(AddTodo);
