import { createStore } from "redux";
import todos from "./reducers/todoReducers";

const store = createStore(
  todos,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;