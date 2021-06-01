import React, {useState} from 'react';

const App = () => {

  // useState is a Hook that returns an array containing a value and 
  // a function  we also pass in a default for the value (in this case, 
  // the initial text). then, we can use the function to change the
  // value and react will re-render the page wit the new value.

  // react has a list of Hooks other then useState that all start with 'use'.
  // To use any hook in your component, the name of the component's first letter 
  // must start with upper case, which is a general react convention anyways.

  // hooks must be defined inside the component body
  // hooks cannot be called conditionally
  
  const [text, setText] = useState('random title')

  const handleClick = () => {
    setText('hello world')
  }

  return (
    <div className='container'>
      <React.Fragment>
        <h1>{text}</h1>
        <button className="btn" onClick={handleClick}>
          Change Title
        </button>
      </React.Fragment>
    </div>
  )
}

export default App;

//use state array: 4:07:15