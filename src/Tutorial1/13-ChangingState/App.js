// having a state dont do anything for us unless we can change it.
// lets do that with event handlers
// bind the handleClick function to "this" in the constructor
// there are 2 ways to set state, by passing in a new state object, 
//    or by passing in a function that can use "prevState" as a param
// note that using this.state inside of the event handler works in
//    this case, but doesnt always, its best to use prevState, the second option

import React from "react"

class App extends React.Component {
    constructor() {
        super();
        this.state = { count: 0 }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState( {count: this.state.count + 1 } )
    }

    handleClick2() {
        this.setState( prevState => {
            return {
                count: prevState.count + 1
            }
        } )
    }
    
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.handleClick2}>Change!</button>
            </div>
        )
    }
}

export default App;