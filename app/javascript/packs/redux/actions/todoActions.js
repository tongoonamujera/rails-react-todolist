import TodoConstants from "../constants/todoConstants";

export const getAllTodos = (todos) => {
  return {
    type: TodoConstants.GET_ALL_TODOS,
    payload: todos
  }
}

export const getAllCompletedTodos = (todos) => {
  return {
    type: TodoConstants.GET_COMPLETED_TODOS,
    payload: todos
  }
}