import React from 'react';

function ToDoItem(props) {
  return(
    <div>
      <input 
        type = "checkbox" 
        checked = {props.chore.completed}
        onChange = {() => props.handleChange(props.chore.id)} 
      />
      <span>{props.chore.text}</span>
      <hr/>
    </div>
  )
}
export default ToDoItem;