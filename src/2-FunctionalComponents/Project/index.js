// Objectives: create a functional component called MyInfo that returns the following UI:
// 1) a header with your name
// 2) a paragraph
// 3) a list of 3 
// Try to style your code (research)

import ReactDOM from "react-dom";

function App()
{
    return (
    <div>
        <h1>Eric</h1>
        <p>This is a paragragh</p>
        <ul>
            <li>thing1</li>
            <li>thing2</li>
            <li>thing3</li>
        </ul>
    </div>
    )
}

ReactDOM.render( <App />, document.getElementById("root") );