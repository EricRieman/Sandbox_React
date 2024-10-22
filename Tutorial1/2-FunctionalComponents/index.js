// WE can create a component by writing a function
import React from "react"
import reactDOM from "react-dom"

// strong react practice to capitalize name of functional compnents
function MyApp()
{
  return ( //the ( needs to be placed exactly here, else the function will not return anything
  <ul>
    <li><p>hello</p></li>
    <li><p>world</p></li>
    <li><p>!</p></li>
  </ul>
  )
}

// now, we can pass MyApp using the jsx syntax:
ReactDOM.render( <MyApp />, document.getElementById( "root" ) );

