import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCompletedTodos } from '../../../redux/actions/todoActions';
import TodoItem from '../todoItem';
import styles from './Completed.module.css';

const Completed = () => {

  const dispatch = useDispatch();

  const fetchCompletedTodos = () => {
    axios.get("/completed.json").then(res => {
      debugger

      const data_s = res.data.data;
      dispatch(getAllCompletedTodos(data_s))
    }).catch(err => console.log('completed_err: ', err.message));
  }

  useEffect(() => {
    fetchCompletedTodos();
  }, [dispatch]);

  const completedTodos = useSelector(state => state.completed.completed);

  const completed_todo = completedTodos.map((todo, index) => {
    const { id, body, completed } = todo;
    return (
      <div key={id} className={styles.container}>
        <TodoItem index={index} id={id} body={body} completed={completed} />
      </div>
    );
  });

  return (
    <>
      {completed_todo}
    </>
  )
}

export default Completed;