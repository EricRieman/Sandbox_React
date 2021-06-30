import React, {useState} from 'react';

// This setup should only be used when there are MANY inputs in a form
// If this is the case, you are better off setting up use state with
// an object.

const App = () => {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState(
    {
      firstName: '',
      email: '',
      age: ''
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    const {firstName, email, age } = person

    if( firstName && email && age ) {
      setPeople( [...people, {id:new Date().getTime().toString(), firstName, email, age}])
      setPerson({firstName: '', email: '', age: ''})
    }
    else
      console.log("cannot add empty string")
  }

  // We can define a function to handle all changes, and utilize the dynamic object property, or becasue
  // this example is so simple, we can use an arrow function (see age's onChange)
  const handleChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value

    setPerson({...person, [name]:value }) //dynamic object property
  }

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input type="text" id="firstName" name="firstName" value={person.firstName} onChange={handleChange}/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" value={person.email} onChange={handleChange}/>
          </div>
          <div className="form-control">
            <label htmlFor="age">Age: </label>
            <input type="text" id="age" name="age" value={person.age} onChange={(e)=>{ setPerson({...person, age: e.target.value })}}/>
          </div>
          <button type="submit">Add Person</button>

          {
            people.map( (person) => {
              const {id, firstName, email, age } = person
              return (
                <div className = 'item' key= {id}>
                  <h4>{firstName}</h4>
                  <p>{email}</p>
                  <p>{age}</p>
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