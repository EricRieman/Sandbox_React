// when styling in jsx, we cannot use the typial 'class' for defining 
// css classes, instead we use 'className'
// we cannot apply a className to a react component, only its internal html elements
import React from "react"
import ReactDOM from "react-dom"
import App from "./style.css"

const Test = () => <nav className = "navBar">Hello</nav>

ReactDOM.render( <Test />, document.getElementById("root") );