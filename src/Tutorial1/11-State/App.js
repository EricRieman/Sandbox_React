// state is the data a component maintains
// Currently, the only way we know how to pass data into a component is though props
// but props is immutable, meaning we cannot assign values to a prop, only read from them
// States in react allows the component to change its own data, if it needs to
// the componenet needs to be a class component if we want it to maintain its own state
//  initialize state by accessing the parent class in the constructor, using super()

import React from "react"

class App extends React.Component {
    constructor() {
        super();
        this.state = { text: "world" };
    }
    
    render() {
        return ( 
            <div>
                <p>Hello {this.state.text} </p>
            </div>
        )
    }
}

export default App;