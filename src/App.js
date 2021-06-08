import React, {useState, useEffect} from 'react';

// by default useEffect runs every re-render
// it runs the callback function passed in, also known as the side effect.
// cleanup function
// second parameter

//rember, we cannot place hooks inside of conditionals, so to selectivly call use state (not run every render)
//we could put the condition inside of the callback function, but that is not the only solution
//5:02

const App = () => {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    console.log('use effect called')
    document.title = `New Messages(${value})`
  })
  
  return (
    <div className ="container">
      <h1>{value}</h1>
      <button className='btn' onClick={ () => setValue(value+1)}>Click me</button>
    </div>
  )
}

export default App;