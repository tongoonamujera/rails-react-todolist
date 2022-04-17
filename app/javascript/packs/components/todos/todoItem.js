import React from "react";
import styles from "./todoItem.module.css";

const TodoItem = ({ id, body, completed }) => {
  return (
    <div className={styles.container}>
      <div className={styles.id}>
        {id}
      </div>

      <div className={styles.body}>
        {body}
      </div>

      <div className={styles.completed}>
        {completed ?
          <input type={"checkbox"} value={true} checked /> :
          <input type={"checkbox"} value={false} />}
      </div>
    </div>
  )
}

export default TodoItem;