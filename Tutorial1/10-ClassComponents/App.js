import React from "react"

// below is a functional component
export function App()
{
    return(
        <h1>Code goes here</h1>
    )
}

// below is a class based componenet, that does the same thing at the functional component above
// its always an extension of a React.Component and also must implement the render() method
export class App2 extends React.Component {
    render() {
        return (
            <h1>Code goes here</h1>
        )
    }
}

// you can access member functions in your class, using the 'this' operator
// you must use the 'this' operator to access props
export class App3 extends React.Component {
    
    myMethod() {
        const date = new Date();
        return date.getDay();
    }

    render() {
        return (
            <div>
                <h1>this is day: {this.myMethod()}</h1>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}