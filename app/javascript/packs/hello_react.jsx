// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import TODOS from './components/allTodos';
import Header from './components/todos/Header';
import store from './redux/store';
import styles from './hello_react.module.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { createRoot } from 'react-dom/cjs/react-dom.production.min';
import Completed from './components/todos/completed_todos/Completed';
import Pending from './components/todos/pending_todos/Pending';


const Hello = () => {
  const route = useSelector(state => state.route.route)
  return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>

          {
            route === "home" ? <TODOS /> : route === "pending" ? <Pending /> : <Completed /> 
          }
          {/* <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<TODOS />} />
              <Route path="/completed_todos" element={<Completed />} />
              <Route path="/pending_todos" element={<Pending />} />
            </Routes>
          </BrowserRouter> */}
        </main>
      </div>
  )
}


document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  const root = createRoot(container)
  root.render(
    <Provider store={store}>
      <Hello />
    </Provider>
  )
})
