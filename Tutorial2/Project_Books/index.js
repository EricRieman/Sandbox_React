import React from "react"
import ReactDom from "react-dom"

// Note here that becasue App is a fefault export, we
// can change the name of the import
import MySpecificApp from "./App"

ReactDom.render( <MySpecificApp />, document.getElementById("root") )