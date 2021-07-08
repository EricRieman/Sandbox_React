// Prop driling in not an 'official' term, but it is a side effect that occurs 
// when you have many nested components. You want to keep track of some state
// in the upper component, and need to pass it down into child components,
// but it is only being used by the bottom most componenet.

// There are many ways we can reduce or fix prop drilling - context api, redux

// Below is an example of what prop drilling is, where we pass down a remove
// function from the parent component(App), to access in it's child (Person).

import React, {useState} from 'react';
import {data} from './data'

const App = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => setPeople( people.filter(person => person.id !== id ) )

  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} removePerson={removePerson} />
    </section>
  )
}

const List = ({people, removePerson}) => {
  return (
    <>
      {people.map((person)=>{
        return <Person key={person.id} {...person} removePerson={removePerson} />
      })}
    </>
  )
}

const Person = ({id, name, removePerson}) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={()=> removePerson(id)}>remove</button>
    </div>
  )
}

//8:08

export default App;