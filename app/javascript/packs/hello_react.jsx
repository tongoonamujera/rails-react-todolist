// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TODOS from './components/allTodos';
import Header from './components/todos/Header';
import store from './redux/store';
import styles from './hello_react.module.css';

const Hello = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <TODOS />
      </main>
    </div>
  )
}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Hello />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
