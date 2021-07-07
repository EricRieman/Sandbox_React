// Prop driling in not an 'official' term, but it is a side effect that occurs 
// when you have many nested components. You want to keep track of some state
// in the upper component, and need to pass it down into child components,
// but it is only being used by the bottom most componenet.

// There are many ways we can reduce or fix prop drilling - context api, redux

import React, {useState} from 'react';
import {data} from './data'

const App = () => {

  const [people, setPeople] = useState(data)
  return (
    <section>
      <h3>prop drilling</h3>
      <List people={people} />
    </section>
  )
}

const List = ({people}) => {
  return (
    <>
      {people.map((person)=>{
        return <Person key={person.id} />
      })}
    </>
  )
}

const Person = ({id, name}) => {
  return (
    <div className='item'>
      <h4>single item</h4>
    </div>
  )
}

//8:08

export default App;