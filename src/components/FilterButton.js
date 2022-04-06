import React from "react";


function FilterButton(props) {
  
  return (
    <button 
    type="button" 
    className="btn buttonFilter"
    aria-pressed={props.isPressed}
    onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden"></span>
      <span>{props.name}</span>
      <span className="visually-hidden"></span>
    </button>
  );
}

export default FilterButton;
