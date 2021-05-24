// we can utilize the "event" that gets passed by default to
// the handler. By naming the element the same as it's data in
// state, we can use the same handler method, and use the 
// element's name to use string object names with []

import React from "react"

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState( {
            [event.target.name]: event.target.value
        })
    }
    
    render() {
        return(
            <div>
                <form>
                    <input type="text" name="firstName" placeholder="first name" onChange={this.handleChange}/>
                    <input type="text" name="lastName" placeholder="last name" onChange={this.handleChange}/>
                    <br />
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                </form>
           </div>
        )
    }
}

// we can simplify the above code by just applying the state to 
// the value of the input element. This also makes the element
// reactive becasue its value is always exactly state.
// Also, there is a hard to find bug that could come up that
// we can avoid by savingthe values from event before trying 
// to setState

export class App2 extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked})
                            : this.setState({[name]: value })
    }
    
    render() {
        return(
            <div>
                <form>
                    <input 
                        type="text" 
                        value={this.state.fistName} 
                        name="firstName" 
                        placeholder="first name" 
                        onChange={this.handleChange} />
                    <input 
                        type="text" 
                        value={this.state.lastName } 
                        name="lastName" placeholder="last name" 
                        onChange={this.handleChange}/>
                    <br />
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                
                    {
                        // in react, there are major differences to the text area element,
                        // becasue it behaves more like a text input type
                    }

                    <textarea 
                        value={"test"}
                        onChange={this.handleChange}
                    />

                    <br />
                    
                    <label>
                        <input 
                            type = "checkbox"
                            name="isFriendly"
                            checked={this.state.isFriendly}
                            onChange={this.handleChange}
                        />
                        Is friendly?
                    </label>

                    <br />

                    <label>
                        <input 
                            type = "radio"
                            name="gender"
                            value = "male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> 
                        male
                    </label>

                    <br />

                    <label>
                        <input 
                            type = "radio"
                            name="gender"
                            value = "female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> 
                        female
                    </label>

                    <br />

                    <label>Favorite color:</label>
                    <select
                       value={this.state.favColor} 
                        onChange={this.handleChange}
                        name="favColor" >

                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                    </select>

                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <h2>you are a {this.state.gender}</h2>
                    <h2>your favorite color is {this.state.favColor}</h2>
                </form>
           </div>
        )
    }
}

export default App;