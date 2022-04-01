import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { nanoid } from "nanoid";


const TodoData = [
  { id: "todo-" + nanoid(), name: "Learn React", completed: false },
  { id: "todo-" + nanoid(), name: "Be awesome", completed: false },
  { id: "todo-" + nanoid(), name: "Learn ...", completed: false }
];
ReactDOM.render(
  <React.StrictMode>
    <App 
    tasks={TodoData}
    
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
