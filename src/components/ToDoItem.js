import React from 'react';

function ToDoItem(props) {
  return(
    <div>
      <input type="checkbox" checked={props.chore.completed}/>
      <span style={{textDecoration: props.chore.completed && "line-through"}}>{props.chore.text}</span>
      <hr/>
    </div>
  )
}
export default ToDoItem;