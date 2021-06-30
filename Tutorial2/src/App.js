// When using forms, we have controlled inputs, but we also have the option of using 
// uncontrolled inputs, by using useRef. The most popular way of using useRef is by 
// targeting the DOM element which allows us to setup uncontrolled inputs.

// useRef preserves the value between renders (like useState), does NOT trigger 
// re-render, and targets DOM node/elements

import React, {useEffect, useRef } from 'react';

const App = () => {
  return (
    <>
      <form className = 'form'>
        <div>
          <input type="text" />
          <button type="button">Submit</button>
        </div>
      </form>
    </>
  )
}

// 7:09

export default App;