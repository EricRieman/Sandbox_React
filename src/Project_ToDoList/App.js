// Note that this code will produce a warning about assigning the checked propery of the checkbox.
// The checkboxes will no longer work as this removs the button handler.
// This is expected, we will learn how to clean it up later.

import ToDoItem from "./ToDoItem"
import todoData from "./todoData"

import "./style.css"

function App()
{
    const todoComponents = todoData.map( data => <ToDoItem key={data.id} todo={data} /> );

    return(
        <div className ="todo-list">
            {todoComponents}
        </div>
    )
}

export default App;