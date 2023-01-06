import * as actions from "./todoConstant";

export const addTodo = (todo) => {
  let todoItem = {
    type: actions.ADD_TODO,
    payload: {
      todo: todo
    }
  };
  return todoItem;
};

export const deleteTodo = (todoId) => {
  return {
    type: actions.DELETE_TODO,
    payload: {
      todo: todoId
    }
  };
};

export const updateTodo = (todoId) => {
  return {
    type: actions.EDIT_TODO,
    payload: {
      todo: todoId
    }
  };
};
