import React from "react"
import ToDoItem from "./components/ToDoItem"
import todosData from "./ToDoData"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTasks = prevState.tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
      return {
        tasks: updatedTasks
      }
    })
  }
  
  render() {
    const toDoItems = this.state.tasks.map(task => {
      return(
        <ToDoItem 
          key={task.id}
          handleChange={this.handleChange}
          chore={task}
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