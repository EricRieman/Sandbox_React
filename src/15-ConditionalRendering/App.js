// There are a number of different ways we can conditionally render a component
// we will cover some of the more common ways
// The first is passing the condition using a prop in the component
// the second, and prefered way in this case, is to put the condition in the 
//    App component, as that is the parent, and we would like to keep the child
//    simple by just rendering exactly what it needs
// the 3rd example shows that we can utilize the && operator if we conditionaly
//    want to display nothing. the component will not render if the first part is false
import React from "react"
import {Conditional, Conditional2} from "./Conditional"

class App extends React.Component {
    constructor() {
        super();
        this.state = { isLoading: true }
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState ({ isLoading: false })
        }, 1500 )
    }

    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading} />
                { this.state.isLoading ? <h1>loading</h1> : <Conditional2 /> }
                { !this.state.isLoading && <Conditional2 /> }
            </div>
        )
    }
}

export default App;