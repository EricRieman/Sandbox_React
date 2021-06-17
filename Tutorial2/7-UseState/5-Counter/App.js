import React, {useState} from 'react';

const App = () => {
  
  const [value, setValue] = useState(0)

  // instead of defining functions for simple operations (particularly one line operations),
  // we can just use an arrow function and implement them in the jsx

  // we can also pass in a function to our set state. In the case below, we pass in a setTimeout
  // that calls setValue after 2 seconds.

  const onIncreaseLater = () => {
    setTimeout( () =>{
      // The line below will not do what we expect becasue value is still the previous number
      // untill the 2 seconds are up. So if we click 3 times within 2 seconds, the value will
      // still only increase by 1.
      //setValue(value + 1)

      // We need to pass a function into setState, which gets called after the 2 seconds is up,
      // which by then, the value has increased. To do this safely, react inclueds a prevState
      // parameter that ensures the correct previous value of the state
      setValue( (prevState) =>  prevState + 1 )
    }, 2000)
  } 

  return (
    <>
      <section style ={{margin:'4rem 0'}} >
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => setValue( value + 1 ) }>Increase</button>
        <button className='btn' onClick={() => setValue( value - 1)}>Decrease</button>
        <button className='btn' onClick={() => setValue( 0 )}>Reset</button>
        <button className='btn' onClick={onIncreaseLater}>Increase later</button>
      </section>
    </>
  )
}

export default App;