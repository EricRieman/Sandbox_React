//

import React from "react"

class App extends React.Component {
    constructor() {
        super();
        this.state = { isLoggedIn: true };
    }
    
    render() {
        return (           
            <div>
                <p>You are logged {this.state.isLoggedIn ? "in" : "out"} </p>
            </div>
        )
    }
}

export default App;