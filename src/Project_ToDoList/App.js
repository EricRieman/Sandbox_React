import React from "react"

import ToDoItem from "./ToDoItem"
import todoData from "./todoData"

import "./style.css"

class App extends React.Component {
    constructor() {
        super();
        this.state = { todos: todoData }
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