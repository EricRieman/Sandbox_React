// every component we create in react goes though a series of phases during its time alive in the react app.
// it goes though a series of events as it is being updated
// lifecylce methods diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// Some of the methods we will use have been deprecated since this tutorial, buy still available
//   for use if you preclude the method name with UNSAFE_ (until version 17 is released)

import React from "react"

class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        // only runs once, after component shows on screen, even with a reRender
        // common use for this to to get data needed to display correctly
        console.log("Component mounted")
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log( nextProps )
        console.log( "Component will recieve props" )
        // depreicated, but a way to interact/intercept the props before passing them
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log( "Component should update" )
        // Allows us to return true/false if the componenet should update (re-render).
        // in some cases, this can be expensive, so here we can apply logic to determine if we should

        return true;
    }

    componentWillUnmount() {
        console.log( "Component will unmount" )
        // the component will eventually end (disappear from screen)
        // this allows us to clean up or tare down, like to remove an event handler
    }

    static getDerivedStateFromProps( props, state ) {
        console.log( "Derive state using props" )
        // return the new, updated state based using the provided props
        // you will probably never need to use this, react team is against using it
        // has the possibility of causing issues
    }

    getSnapshotBeforeUpdate() {
        console.log( "Derive state using props" )
        // Create a backup of the current data
        // Not a common lifecycle method
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

export default App;