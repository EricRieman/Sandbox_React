// When using forms, we have controlled inputs, but we also have the option of using 
// uncontrolled inputs, by using useRef. The most popular way of using useRef is by 
// targeting the DOM element which allows us to setup uncontrolled inputs.

// useRef preserves the value between renders (like useState), does NOT trigger 
// re-render, and targets DOM node/elements

// in the example below, refContainer begins null, and is not set until the user types in some text
// and submits the form. Then 

import React, {useEffect, useRef } from 'react';

const App = () => {
  const refContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current.value) //refContainer.current grabs the current element (text input), and then we access it's value
  }

  return (
    <>
      <form className = 'form' onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default App;