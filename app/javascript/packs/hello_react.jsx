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
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { createRoot } from 'react-dom/cjs/react-dom.production.min';


const Hello = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<TODOS />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </Provider>
  )
}


document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
  const root = createRoot(container)
  root.render(<Hello />)
})
