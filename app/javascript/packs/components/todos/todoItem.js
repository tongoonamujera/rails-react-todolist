import React from "react";
import styles from "./todoItem.module.css";
import axios from "axios";

const TodoItem = ({ id, body, completed }) => {
  const updateCompleted = () => {
    const ids = id;
    axios.put(`/todos/${ids}`, {
      body,
      completed: true,
    },
      {})
      .then(res => {
        console.log('update: ', res)
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
        console.log('update: ', res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.container}>
      <div className={styles.id}>
        {id}
      </div>

      <div contentEditable={true} className={styles.body}>
        {body}
      </div>

      <div className={styles.completed}>
        {completed ?
          <input type={"checkbox"} value={true} checked onClick={removeCompleted}/> :
          <input type={"checkbox"} value={false} onClick={updateCompleted}/>}
      </div>
    </div>
  )
}

export default TodoItem;