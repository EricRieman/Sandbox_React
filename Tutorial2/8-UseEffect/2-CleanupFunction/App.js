import React, {useState, useEffect} from 'react';

//in this example, we are checking the window width by utilizing the window
//object's resize event handler. In this case, the tigger function gets called
//over and over as the window resizes, and each time we add an event listener.
//if this does not get cleaned up, a memory leak will occur. To do this, we
//return a callback function from useEffect where we can remove the event listener

const App = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize )
    }
  })

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default App;