import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
let initialized = false

const App = () => {
  const [loading, setLoading] = useState( true )
  const [tours, setTours] = useState([])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch( url)
      const tours = await response.json()
      initialized = true;
      setLoading(false)
      setTours(tours)
    } catch(error) {
      setLoading(false)
      console.log(error)
    }

    console.log(tours)
  }

  useEffect( () => {
    fetchTours()
  }, [] )

  if( !initialized )
    return <></>

  if( tours.length === 0 ) {
    return (
      <mian>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </mian>
    )
  }

  return ( <main> {loading ? < Loading /> : <Tours tours={tours} removeTour={removeTour}/>} </main>)
}

export default App
