import { Component } from "react";
import "./style.css"

function ToDoItem (props) {
    const completedStyle = {
        fonstStyle: "italic",
        color: "cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className = "todo-item">
            <input 
                type="checkbox" 
                checked = {props.todo.completed}
                onChange = { (event) => props.changeHandle(props.todo.id)}>
            </input>
            <p style = {props.todo.completed ? completedStyle : null }>{props.todo.text}</p>
        </div>
    )
}

export default ToDoItem;