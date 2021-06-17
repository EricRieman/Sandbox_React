import {React, useState} from 'react';

const App = () => {
  const [person, setPerson] = useState({
    name:'peter', 
    age:24,
    message: 'random'})

    const changeMessage = () => {
      // the line below will overwrite the object with a string, making
      // all our data undefined and wont be displayed
      //setPerson("hello world")

      // the line below will overwite the object with an object that 
      // only contins a message, so name and age will be undefined
      //setPerson( {message: "hello world"})

      // The proper way to edit a select property is to use a spread
      // operator to copy the old values, and only assing the property
      // to what to change.
      setPerson( {...person, message: "hello world"})
    }

  return (
    <> 
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className = 'btn' onClick={changeMessage}>
        Change message
      </button>
    </>
  )
}

export default App;

//4:18