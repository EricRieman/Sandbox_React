// Its always best to break code up into smaller chunks. lets clean
// up the code from the last lesson by creating a 'smart' component to 
// hold the logic/sate and a 'presentational' componnent that handles the 
// rendering (there are several differnt names that all refer to the same thing)
import React from "react"
import FormComponent from "./FormComponent"

class FormContainer extends React.Component {
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
            <FormComponent handleChange={this.handleChange} data={this.state} />
        )
    }
}

export default FormContainer;