// Updating text base on time of day, use inline styles with the style property 
// in JSX, we cannot use the typical inline styling <h1 style = "color: yellow">
// because the sytle needs to be a js object, and that needs to be wrapped in {}. 
import React from "react"
import ReactDOM from "react-dom"

function App() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    if( hours < 12)
        timeOfDay = "morning";
    else if ( hours >= 12 && hours <17 )
        timeOfDay = "afternoon";
    else
        timeOfDay = "night"

    return (
        <h1 style = {{color: "orange"}}>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render( <App />, document.getElementById("root") ); 

//We can add as many sytles as we like, but note the syntax is not exactly the same in JSX.
// For example it doesnt like - in the property name, so it is replaced by cammel case. 
// so background-color becomes backgroundColor
function Test() {
    return (
        <h1 style = {{color: "red", backgroundColor: "yellow"}}>Hello</h1>
    )
}

ReactDOM.render( <Test />, document.getElementById("test1") ); 

// You can also define a style object as a variable

const styles = {
    color: "purple", 
    backgroundColor: "pink",
    fontSize: 24                //Note that the default font size is in pixels, so there is no need to use px, or it must be in quotes like "24px"
};

function Test2() {
    return (
        <h1 style = {styles}>Hello</h1>
    )
}

ReactDOM.render( <Test2 />, document.getElementById("test2") ); 

//We can add to and/or edit the style variable like so..


function App2() {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const myStyles = { fontSize: 30 };

    if( hours < 12) {
        timeOfDay = "morning";
        myStyles.color = "pink";
    }
        
    else if ( hours >= 12 && hours <17 ) {
        timeOfDay = "afternoon";
        myStyles.color = "blue";
    }
    else {
        timeOfDay = "night"
        myStyles.color = "purple";
    }

    return (
        <h1 style = {myStyles}>Good {timeOfDay}!</h1>
    )
}

ReactDOM.render( <App2 />, document.getElementById("test3") ); 