// Objective: render an unordered list <ul> to the page that contains <li> any items 

import react from "react"
import reactDOM from "react-dom"

ReactDOM.render
(
  <ul>
    <li><p>hello</p></li>
    <li><p>world</p></li>
    <li><p>!</p></li>
  </ul>,
  document.getElementById("root")
);
