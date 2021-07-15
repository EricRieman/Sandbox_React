import React, { useState } from 'react';
import data from './data';
const App = () => {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    //filter data by count
    setText( count <= 0 ? [data[0]] : data.filter((paragraph, index) => index <= count - 1))
    // we could also use data.splice(0, count) instead of data.filter
  }
  
  return (
  <section className='section-center'>
    <h3>tiered of boring lorem ipsum?</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>
        paragraphs:
      </label>
      <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}/>
      <button type='submit' className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
      {text.map((paragraph, index) => <p key={index}>{paragraph}</p> )}
      <p>data text here</p>
    </article>
  </section>
    )
}

export default App;
