import React, {useState} from 'react';

//The best way to handle inputs with React is by using state values
//Forms are a great way to hold multiple inputs, becasue, in React,
//we can use the onSubmit event of the form element, but we could
//also just use the onClick event of the button

const App = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  //by default, the browser will submit the form and refresh the page,
  //so we need to prevent defaults using the event paramter

  const handleSubmit = (e) => {
    e.preventDefault()
    if( firstName && email ) { // quick data validation, cannot submit an empty string
      setPeople( [...people, {id:new Date().getTime().toString(), firstName, email}]) // in es6, we can use this shorthand if the variable matches the property name
      setFirstName('')
      setEmail('')
    }
    else
      console.log("cannot add empty string") // good place to use a modal, but only logging for now
  }

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <button type="submit">Add Person</button>

          {
            people.map( (person) => {
              const {id, firstName, email } = person
              return (
                <div className = 'item' key= {id}>
                  <h4>{firstName}</h4>
                  <p>{email}</p>
                </div>
              )
            })
          }
        </form>
      </article>
    </>
  )
}


export default App;