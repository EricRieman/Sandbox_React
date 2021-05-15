import ToDoItem from "./ToDoItem"
import "./style.css"

function App()
{
    return(
        <div className ="todo-list">
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
        </div>
    )
}

export default App;