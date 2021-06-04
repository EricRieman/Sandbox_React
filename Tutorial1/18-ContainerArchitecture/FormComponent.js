import React from "react"

function FormComponent(props) {
    return (
        <main>
            <form>
                <input 
                    name="firstName" 
                    value={props.data.firstName} 
                    onChange={props.handleChange} 
                    placeholder="first name" /> 
                <br/>
                <input 
                    name="lastName" 
                    value={props.data.lastName} 
                    onChange={props.handleChange} 
                    placeholder="last name" /> 
                <br/>
                <input 
                    name="age" 
                    value={props.data.age} 
                    onChange={props.handleChange} 
                    placeholder="age" />
                <br/>

                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    /> Male
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    /> Female
                </label>
                <br />

                <select value={props.data.location} name="location" onChange={props.handleChange}>
                    <option value="Please select a location">Please select a location</option>
                    <option value="miami">Miami</option>
                    <option value="denver">Denver</option>
                    <option value="cleveland"> Cleveland</option>
                    <option value="chicago">Chicago</option>
                </select>
                <br />

                <label>
                    <input 
                        type="checkbox" 
                        name="isVegan"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestricts.isVegan}
                    /> Vegan
                    <input 
                        type="checkbox" 
                        name="isKosher"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestricts.isKosher}
                    /> Kosher
                    <input 
                        type="checkbox" 
                        name="isLactoseFree"
                        onChange={props.handleChange}
                        checked={props.data.dietaryRestricts.isLactoseFree}
                    /> Lactose Free
                </label>
                <br />

                <button>Submit</button>
                
            </form>
            <hr />
            <h2>Entered info:</h2>
            <p>your name: {props.data.firstName + " " + props.data.lastName}</p>
            <p>your age: {props.data.age}</p>
            <p>your gender: {props.data.gender}</p>
            <p>your location: {props.data.location}</p>
        </main>
    )
}

export default FormComponent;