import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./ToDoData"

function App() {

  const tasks = todosData.map(function(task) {
    return(
      <ToDoItem 

      key = {task.id}
      chore = {task}
      />
    )
    
  })

  return (
      <div className="todo-list">
        {tasks}
      </div>
  )
}

export default App