import React from "react";
import styles from "./todoItem.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllTodos } from "../../redux/actions/todoActions";

const TodoItem = ({ index, id, body, completed }) => {
  const dispatch = useDispatch();
  const updateCompleted = () => {
    const ids = id;
    axios.put(`/todos/${ids}`, {
      body,
      completed: true,
    },
      {})
      .then(res => {
        const remainder = res.data.data;
        dispatch(getAllTodos(remainder));
      })
      .catch(err => console.log(err.message))
  }

  const removeCompleted = () => {
    const ids = id;
    axios.put(`/todos/${ids}`, {
      body,
      completed: false,
    },
      {})
      .then(res => {
        const remainder = res.data.data;
        dispatch(getAllTodos(remainder));
      })
      .catch(err => console.log(err))
  }

  const deleteTodo = () => {
    const ids = id;
    axios.delete(`/todos/${ids}`)
      .then(res => {
        const remainder = res.data.data;
        console.log('res: ', res)

        dispatch(getAllTodos(remainder));

      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.container}>
      <div className={styles.id}>
        {index+1}.
      </div>

      <div contentEditable={true} className={styles.body}>
        {body}
      </div>

      <div className={styles.completed}>
        {completed ?
          <input type={"checkbox"} value={true} checked onClick={removeCompleted}/> :
          <input type={"checkbox"} value={false} onClick={updateCompleted}/>}
      </div>

      <div className={styles.actions}>
        <span onClick={deleteTodo}>
          delete
        </span>
      </div>
    </div>
  )
}

export default TodoItem;