import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./ToDoData"

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      tasks: todosData
    }
  }
  
  render() {
    const toDoItems = this.state.tasks.map(function(task) {
      return(
        <ToDoItem 

        key = {task.id}
        chore = {task}
        />
      )  
    })
    
    return (
      <div className="todo-list">
        {toDoItems}
      </div>
    ) 
  }
}

export default App