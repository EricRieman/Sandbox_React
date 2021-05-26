// convert the functional compoments into class components
import React from "react"
import ReactDom from "react-dom"
import React from "react"

function App() {
    return (
        <div>
            <Header username = "eric"/>
            <Greeting />
        </div>
    )
}

function Header( props ) {
    return (
        <header>
            <p>welcome, {props.username}</p>
        </header>
    )
}

function Greeting () {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay

    if( hours < 12)
        timeOfDay = "morning";
    else if ( hours >= 12 && hours < 17)
        timeOfDay = "afternoon"
    else
        timeOfDay = "night"
    
    return <h1>Good {timeOfDay} to you </h1>
}

ReactDom.render(<App />, document.getElementById("root"))

// covertion is below:

class App2 extends React.Component {
    render() {
        return (
            <div>
                <Header2 username = "eric"/>
                <Greeting2 />
            </div>
        )
    }
}

class Header2 extends React.Component {
    render() {
        return (
            <header>
                <p>welcome, {this.props.username}</p>
            </header>
        )
    }
}

class Greeting2 extends React.Component {
    getTimeOfDay() {
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay
    
        if(hours < 12)
            timeOfDay = "morning";
        else if(hours >= 12 && hours < 17)
            timeOfDay = "afternoon"
        else
            timeOfDay = "night"
        
        return timeOfDay;
    }

    render() {
        return <h1>Good {this.getTimeOfDay()} to you </h1>
    }
}

ReactDom.render(<App2 />, document.getElementById("test1"))