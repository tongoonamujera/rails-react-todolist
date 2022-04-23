import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPendingTodos } from "../../../redux/actions/todoActions";
import TodoItem from "../todoItem";
import styles from './Pending.module.css';
const Pending = () => {
  const dispatch = useDispatch();

  const getpendingTodos = () => {
    axios.get('/pending.json').then(res => {
      debugger
      const pending_d = res.data.data;
      dispatch(getAllPendingTodos(pending_d))
    }).catch(err => {
      debugger

      console.log('pending_todo error: ',err.message)
    })
  }

  useEffect(() => {
    getpendingTodos();
  }, [dispatch]);

  const pending = useSelector(state => state.pending.pending);

  const pending_todo = pending.map((todo, index) => {
    const { id, body, completed } = todo;
    return (
      <div key={id} className={styles.container}>
        <TodoItem index={index} id={id} body={body} completed={completed} />
      </div>
    );
  });
  return (
    <>
      {pending_todo}
    </>
  )
}

export default Pending;