// have state track if user is logged in or out
// add a button that logs the user in/out 
// make the button text show login or logout
// display text to show if the user is logged in or out

import React from "react"

class App extends React.Component {
    constructor() {
        super();
        this.state = { isLoggedIn: true }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( prevState => { return {isLoggedIn: !prevState.isLoggedIn} } )
    }
    
    render() {
        return ( 
            <div>
                <h1> {this.state.isLoggedIn ? "logged in" : "logged out"} </h1>
                <button onClick={this.handleClick}>{this.state.isLoggedIn ? "log out" : "log in"}</button>
            </div>
        )
    }
}

export default App;