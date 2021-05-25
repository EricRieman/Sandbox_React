import React from "react"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            character: {}
         }
    }

    componentDidMount() {
        this.setState( {loading: true} )

        fetch( "https://swapi.dev/api/people/1")
            .then( response => response.json())
            .then( data => {
                this.setState( {
                    character: data,
                    loading: false
                } )
            } )        

    }
    
    render() {
        return(
            <div>
                <p>{this.state.loading ? "Loading..." : this.state.character.name }</p>
            </div>
        )
    }
}

export default App;