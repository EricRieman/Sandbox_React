// We refactored the intro code to use context API to eliminate the prop drilling
// First we define the context outside of the App. Then, that gives us access to
// the provider and consumer components. The provider component needs to wrap the 
// root element (App's return) and we set it's value property to an object that we 
// want it's children components to have access to, in this case, the remove 
// function and people state. 

// we can then access that object by using useContext() and pass in the 
// context name, in this case, PersonContext. Dont forget, we are getting
// an object back, so we must either destructure it, or use the dot operator.

import React, {useState, useContext} from 'react';
import {data} from './data'

const PersonContext = React.createContext();

const App = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => setPeople( people.filter(person => person.id !== id ) )

  return (
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>prop drilling</h3>
      <List/>
    </PersonContext.Provider>
  )
}

const List = () => {
  const {people} = useContext( PersonContext )
  
  return (
    <>
      {people.map((person)=>{
        return <Person key={person.id} {...person} />
      })}
    </>
  )
}

const Person = ({id, name}) => {
  const {removePerson} = useContext(PersonContext)
  
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={()=> removePerson(id)}>remove</button>
    </div>
  )
}

export default App;