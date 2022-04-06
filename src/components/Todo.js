import React, { useState } from "react";
import { BsTrash, BsPencil } from "react-icons/bs";

export default function Todo(props) {
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
      }

      
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false);
      }
      
    const editingTemplate = (
        <form className="stack-small-form" onSubmit={handleSubmit}>
          <div className="form-group">
        <input
            id={props.id}
            className="todo-text"
            type="text"
            value={newName}
            onChange={handleChange}
            placeholder={props.name}
        />
          </div>
          <div className="btn-group btn-group-edit">
          <button type="submit" className="btn btn__primary todo-edit">
              Save
            </button>
          <button
            type="button"
            className="btn todo-cancel"
            onClick={() => setEditing(false)}
        > 
        Cancel
        </button>
          </div>
        </form>
      );

      const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <input
                className="button_checkbox"
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
              />
              <label className="todo-label" htmlFor={props.id}>
                {props.name}
              </label>
            </div>
            <div className="btn-group btn-group-inter">
            <button type="button" className="btn btn__edit" onClick={() => setEditing(true)}>
                <BsPencil />          
            </button>
              <button
                type="button"
                className="btn btn__delete"
                onClick={() => props.deleteTask(props.id)}
              >
                 <BsTrash />
              </button>
            </div>
        </div>
        
      );
      

    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

  }
  