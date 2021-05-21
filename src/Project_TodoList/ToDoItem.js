import "./style.css"

function ToDoItem(props) {
    return (
        <div className = "todo-item">
            <input type="checkbox" 
                   checked = {props.todo.completed}
                   onChange = { (event) => props.changeHandle(props.todo.id)}>
            </input>
            <p>{props.todo.text}</p>
        </div>
    )
}

export default ToDoItem;