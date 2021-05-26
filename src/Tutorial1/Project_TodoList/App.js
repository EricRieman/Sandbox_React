// pass the method down to the ToDoItem 
// in the ToDoItem, when the onChange event happens, it calls the handleChange method
//    and passes the id of the todo into the function

import React from "react"

import ToDoItem from "./ToDoItem"
import todoData from "./todoData"

import "./style.css"

class App extends React.Component {
    constructor() {
        super();
        this.state = { todos: todoData }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState( prevState => {
            const updatedState = prevState.todos.map( todo => {
                if( todo.id === id ) 
                    todo.completed = !todo.completed
                
                return todo
            })

            return {
                 todos: updatedState
            }
        })
    }
    
    render() {
        const todoComponents = this.state.todos.map( data => <ToDoItem key={data.id} todo={data} changeHandle = {this.handleChange} /> );

        return(
            <div className ="todo-list">
                {todoComponents}
            </div>
        )
    }
}

export default App;