// wire up the travel form so that it works, use the concept of controlled forms (1 handler)
// text should update in real time, as the form gets filled
import React from "react"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            location: "",
            dietaryRestricts: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState( prevState => { return{ dietaryRestricts: {...prevState.dietaryRestricts, [name]: checked}}})
                            : this.setState( {[name]: value })
    }
    
    render() {
        return(
            <main>
                <form>
                    <input 
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange} 
                        placeholder="first name" /> 
                    <br/>
                    <input 
                        name="lastName" 
                        value={this.state.lastName} 
                        onChange={this.handleChange} 
                        placeholder="last name" /> 
                    <br/>
                    <input 
                        name="age" 
                        value={this.state.age} 
                        onChange={this.handleChange} 
                        placeholder="age" />
                    <br/>

                    {/*radio buttons for gender here*/}
                    {/*surrounding in a label ensures the text can also be clicked*/}
                    <label>
                        <input 
                            type="radio" 
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                        <input 
                            type="radio" 
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />

                    {/*select box for location here*/}
                    <select value={this.state.location} name="location" onChange={this.handleChange}>
                        <option value="Please select a location">Please select a location</option>
                        <option value="miami">Miami</option>
                        <option value="denver">Denver</option>
                        <option value="cleveland"> Cleveland</option>
                        <option value="chicago">Chicago</option>
                    </select>
                    <br />

                    {/*check boxes for dietary rescrictions here*/}
                    <label>
                        <input 
                            type="checkbox" 
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestricts.isVegan}
                        /> Vegan
                        <input 
                            type="checkbox" 
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestricts.isKosher}
                        /> Kosher
                        <input 
                            type="checkbox" 
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.dietaryRestricts.isLactoseFree}
                        /> Lactose Free
                    </label>
                    <br />

                    <button>Submit</button>
                    
                </form>
                <hr />
                <h2>Entered info:</h2>
                <p>your name: {this.state.firstName + " " + this.state.lastName}</p>
                <p>your age: {this.state.age}</p>
                <p>your gender: {this.state.gender}</p>
                <p>your location: {this.state.location}</p>

           </main>
        )
    }
}

export default App;