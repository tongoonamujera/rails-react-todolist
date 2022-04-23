import { combineReducers } from "redux";
import TodoConstants from "../constants/todoConstants";

const allTodosReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case TodoConstants.GET_ALL_TODOS:
      return {
        ...state,
        todos: payload
      }

    default:
      return state;
  }
}

const completedTodosReducer = (state = { completed: [] }, { type, payload }) => {
  switch (type) {
    case TodoConstants.GET_COMPLETED_TODOS:
      return {
        ...state,
        completed: payload
      }
  
    default:
      return state;
  }
}

const todos = combineReducers({
  allTodos: allTodosReducer,
  completed: completedTodosReducer
})

export default todos;