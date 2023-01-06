import * as actions from "./todoConstant";

const initialState = [];

export default function (state = initialState, { type, payload }) {
  console.log(type, payload);
  switch (type) {
    case actions.ADD_TODO:
      const todo = payload.todo;
      return { ...state, todo };
    case actions.DELETE_TODO:
      return state;
    case actions.EDIT_TODO:
      return state;
    default:
      return state;
  }
}
