import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

const initialColor = '#f15025'

function App() {
const [color, setColor] = useState('')
const [error, setError] = useState(false)
const [list, setList] = useState(new Values(initialColor).all(10))

const handleSubmit = (e) => {
  e.preventDefault()
  try {
    let colors = new Values(color).all(10)
    setList(colors)
    console.log(colors)
  }
  catch(err) {
    setError(true)
    console.log(err)
  }
}

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type='text' 
            value={color} 
            onChange={(e)=> setColor(e.target.value)}
            placeholder={initialColor}
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>Generate</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((val, index) => {
          return <SingleColor key={index} {...val} index={index} />
        })}
      </section>
    </>
  )
}

export default App
