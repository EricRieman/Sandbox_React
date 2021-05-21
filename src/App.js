// make the onChanged event handler actually change the state of the check box

import React from "react"

import ToDoItem from "./ToDoItem"
import todoData from "./todoData"

import "./style.css"

class App extends React.Component {
    constructor() {
        super();
        this.state = { todos: todoData }
        this.handleChange = this.handleChange
    }

    handleChange(id) {
        this.setState( prevState => {

            newState = prevState
            newState.completed = !prevState.completed

            return {
                todos: newState
            }
        })
    }
    
    render() {
        const todoComponents = this.state.todos.map( data => <ToDoItem key={data.id} todo={data} /> );

        return(
            <div className ="todo-list">
                {todoComponents}
            </div>
        )
    }
}

export default App;