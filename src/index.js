import React from "react"
import ReactDom from "react-dom"

import App from "./App"


// We can also create components using React's createElement method.
const Greating = () => {
    return React.createElement( 'h1', {}, 'hello world')
}

// We can also next the createElement calls for a hierachy
const Greatting2 =() => {
    return React.createElement( 'div', {}, React.createElement( 'h1', {}, 'hello world'))
}

ReactDom.render( <App />, document.getElementById("root") )
ReactDom.render( <Greating />, document.getElementById("test1") )
ReactDom.render( <Greating2 />, document.getElementById("test1") )