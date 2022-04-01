import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { nanoid } from "nanoid";


const TodoData = [
  { id: "todo-" + nanoid(), name: "Learn React", completed: false },
  { id: "todo-" + nanoid(), name: "Be awesome", completed: false },
  { id: "todo-" + nanoid(), name: "Learn ...", completed: false }
];

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container);

root.render(
    <App 
    tasks={TodoData}
    />
         );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
