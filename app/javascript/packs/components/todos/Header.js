import axios from 'axios';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../../redux/actions/todoActions';
import styles from './Header.module.css';

const Header = () => {
  const bodyInputRef = useRef();
  const dispatch = useDispatch()

  const clearInputs = () => {
    bodyInputRef.value = ''
  }

  const SubmitHandler = (event) => {
    event.preventDefault();
    const body = bodyInputRef.current.value;
    if (body){
      console.log('submited', body);
      axios.post('/create_todo', {
        body: body ,
        completed: false
      } ).then(res=> {
        console.log(res);
        dispatch(getAllTodos(res.data.data))
        
      })
    }else{
      alert('You Cant submit Nothing');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1>Welcome, Create Your tasks</h1>
      </div>
      <div className={styles.todoForm}>
        <form onSubmit={SubmitHandler}>
          <input
            type={'text'}
            name='body'
            ref={bodyInputRef}
            placeholder='Add A New Task Here .......'
          />
          <button type='submit'>Add Task</button>
        </form>
      </div>

      <div className={styles.navigation}>
        <nav className={styles.navLinks}>
          <div className={styles.firstLink}>All Tasks</div>
          <div className={styles.secondLink}>Pending Tasks</div>
          <div className={styles.thirdLink}>Completed Tasks</div>
        </nav>
      </div>
    </div>
  );
}

export default Header;