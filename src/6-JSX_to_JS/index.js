// when styling in jsx, we cannot use the typial 'class' for defining 
// css classes, instead we use 'className'
// we cannot apply a className to a react component, only its internal html elements

import ReactDOM from "react-dom"

function Test1() {
    const firstName = "Bob";
    const lastName = "Ziggy";

    return (
        <h1>Hello firstName + " " + lastName!</h1>
    )
}

// this will not work, the js (firstName + " " + lastName) is being interpreted as its literal value
ReactDOM.render( <Test1 />, document.getElementById("root") ); 

function Test2() {
    const firstName = "Bob";
    const lastName = "Ziggy";

    return (
        <h1>Hello {`${firstName} ${lastName}`}!</h1>
    )
}

// to get this to work, we wrap the js in {}
ReactDOM.render( <Test2 />, document.getElementById("test1") ); 