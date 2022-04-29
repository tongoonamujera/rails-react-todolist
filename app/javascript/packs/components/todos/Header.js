import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTodos, setRoutes } from '../../redux/actions/todoActions';
import Animation from '../Animations/Animation';
import styles from './Header.module.css';

const Header = () => {
  const bodyInputRef = useRef();
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');

  const SubmitHandler = (event) => {
    event.preventDefault();
    const body = bodyInputRef.current.value;
    if (body){
      console.log('submited', body);
      axios.post('/create_todo', {
        body: body ,
        completed: false
      } ).then(res=> {
        dispatch(getAllTodos(res.data.data))
        setInputValue('')
      })
    }else{
      alert('You Cant submit Nothing');
    }
  }

  const setRouting = () => {
    dispatch(setRoutes("home"))
  }

  const setPending = () => {
    dispatch(setRoutes("pending"))
  }

  const setCompleted = () => {
    dispatch(setRoutes("completed"))
  }

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h1>
          &nbsp;
          <Animation text={"Welcome, Create Your tasks"}/>
        </h1>
      </div>
      <div className={styles.todoForm}>
        <form onSubmit={SubmitHandler}>
          <input
            type={'text'}
            name='body'
            ref={bodyInputRef}
            placeholder='Add A New Task Here .......'
            value={inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
          />
          <button type='submit'>Add Task</button>
        </form>
      </div>

      <div className={styles.navigation}>
        <nav className={styles.navLinks}>
          <div className={styles.firstLink} onClick={setRouting}>
            All Tasks
          </div>
          <div className={styles.secondLink} onClick={setPending}>
            Pending
          </div>
          <div className={styles.thirdLink} onClick={setCompleted}>Completed Tasks</div>
        </nav>
      </div>
    </div>
  );
}

export default Header;