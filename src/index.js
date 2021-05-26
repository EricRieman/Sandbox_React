import React from "react"
import ReactDom from "react-dom"

import App from "./App"


// We can also create components using React's createElement method.
const Greating = () => {
    return React.createElement( 'h1', {}, 'hello world')
}

// We can also nest the createElement calls for a hierachy of elements
const Greating2 =() => {
    return React.createElement( 'div', {}, React.createElement( 'h1', {}, 'hello world'))
}

// In addition to div, we can wrap our component in a section.
// React also has a 'fragment' which can be used like div, but
// does not cause the html page to actually have a div in it
// <React.Fragment> or <> can be used, as sown below
const Greating3 =() => {
    return (
        <React.Fragment>
            <h1>Hello</h1>
            <>
                <h1>world</h1>
            </>

        </React.Fragment>
    )
}


ReactDom.render( <App />, document.getElementById("root") )
ReactDom.render( <Greating />, document.getElementById("test1") )
ReactDom.render( <Greating2 />, document.getElementById("test2") )
ReactDom.render( <Greating3 />, document.getElementById("test3") )

// 1:18:31