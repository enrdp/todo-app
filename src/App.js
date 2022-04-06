import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);
const KEY = "MyApp";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  //Load localStorage 
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem(KEY + '.Todos'));
    if (tasks) {
      setTasks(tasks);
    }
  }, [props.tasks]);

//Save localStorage
  useEffect(() => {
    localStorage.setItem(KEY + '.Todos', JSON.stringify(tasks));
  }, [tasks]);

  /*
  function handleChangeSelect(e){
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempTask = tasks.map(task => {
        return {...task, completed: checked }
      });
      setTasks(tempTask);
    } else {
      let tempTask = tasks.map(task =>
        task.name === name ? { ...task, completed: checked } : task
      );
      setTasks(tempTask);
    }
  };
*/
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function deleteAll(){
    const deleteTasks = tasks.filter(task => task !== task);
    setTasks(deleteTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map(task => {
      if (id === task.id) {
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
  <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTask={editTask}
    deleteAll={deleteAll}
  />
));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const tasksNoun = taskList.length !== 1 ? 'items' : 'item';
  const headingText = `${taskList.length} ${tasksNoun} left`;

    return (
    <div className="todoapp stack-large">
      <h1>Todos</h1>
      <div className="container-todo">
      <Form addTask={addTask} />
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
      {taskList}
      </ul>
      <div className="todo-footer">
      <p id="list-heading">
      {headingText}
      </p>
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <button
        type="button"
        className="btn btn__delete-all"
        onClick={deleteAll}
      >
      <span className="visually-hidden">Clear All</span>
      </button>
      </div>
    </div>
    </div>
  );
}
export default App;