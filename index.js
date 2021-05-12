// ReactDOM and JSX

import React from "react"
import ReactDOM from "react-dom"

// JSX allows us to put html code in our javascript. In order for that to work, you must import react          
ReactDOM.render( <h1>Hello world</h1>, document.getElementById("root"); // paramerter: what react will render, where to put it
      
// We can render all the html we want, but it all must all be inside one tag, like div
ReactDOM.render( <div><h1>Hello world</h1><p>this is a paragraph</p></div>, document.getElementById("root"); // paramerter: what react will render, where to put it
