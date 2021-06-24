import React, {useState, useEffect} from 'react';

// we can use conditional operades, to conditionaly render components in our
// jsx, just as we would for any other html element

const App = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className='btn' onClick={ () => setShow(!show)}>Show/Hide</button>
      {show && <Item /> }
    </>
  )
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])
  
  return (
    <div style = {{marginTop: 'rem'}}>
      <h1>window</h1>
      <h2>Size: {size}</h2>
    </div>
  )
}

export default App;