import {React, useState} from 'react';

const App = () => {
    // We can define multiple different states for each value, instead of using objects
    // in this case, we dfine a state for each value, and just acess the specific value
    // we need in the handler.

    const [name, setName] = useState("peter")
    const [age, setAge] = useState(24)
    const [message, setMessage] = useState('random')

    const changeMessage = () => {
      setMessage( "hello world")
    }

  return (
    <> 
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className = 'btn' onClick={changeMessage}>
        Change message
      </button>
    </>
  )
}

export default App;

//4:18