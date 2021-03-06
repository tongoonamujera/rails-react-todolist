import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getAllTodos } from '../redux/actions/todoActions';
import styles from './allTodos.module.css'
import TodoItem from './todos/todoItem';
import Loading from './Loading';

const TODOS = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const getData = () => {
    axios.get('/todos.json')
      .then(res => {
        debugger

        dispatch(getAllTodos(res.data))
        setLoading(true);
      })
      .catch(err => {
        debugger
        console.log(err.message)
      });
  }

  const loadingTemp = (
    <Loading />
  );

  useEffect(() => {
    getData();
  }, [loading]);

  const allTodos = useSelector(state => state.allTodos.todos);

  const loaded = allTodos.reverse().map((todo, index )=> {
    const { id, body, completed } = todo;
    return (
      <div key={id} className={styles.container}>
        <TodoItem index={ index } id={id} body={body} completed={completed} />
      </div>
    )
  });

  return (
    <>
      {
        allTodos.length === 0 ? loadingTemp : loaded
      }
    </>
  )
}

export default TODOS;