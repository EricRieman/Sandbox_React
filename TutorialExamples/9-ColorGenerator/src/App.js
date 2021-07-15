import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
const [color, setColor] = useState('')
const [error, setError] = useState(false)
const [list, setList] = useState([])

const handleSubmit = (e) => {
  e.preventDefault()
  try {
    let colors = new Values(color).all(10)
    setList(colors)
    console.log(colors)
  }
  catch(error) {
    setError(true)
    console.log(error)
  }
}

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} onChange={(e)=> setColor(e.target.value)}/>
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
