import React, {useState, useEffect} from 'react';

// by default useEffect runs every re-render
// it runs the callback function passed in, also known as the side effect.

//rember, we cannot place hooks inside of conditionals, so to selectivly call useEffect (not run every render)
//we could put the condition inside of the callback function, but that is not the only solution

//we can also (optionally) pass in a second paramter which is an array of dependancies, and will only
//run if one of those dependancies are changed. If left blank (empty array), it will only run on the 
//initial render.

//We can implement as many useEffects as we want. This allows us to call a different useEffect for any
// number of variable changes

const App = () => {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    console.log('initial render or value change ')
    document.title = `New Messages(${value})`
  }, [value])

  useEffect(() => {
    console.log('initial render')
  }, [])
  
  return (
    <div className ="container">
      <h1>{value}</h1>
      <button className='btn' onClick={ () => setValue(value+1)}>Click me</button>
    </div>
  )
}

export default App;