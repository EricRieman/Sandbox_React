import React, {useState, useEffect} from 'react'
import { data } from '../data'
import { Link, useParams } from 'react-router-dom'

const Person = () => {
  console.log( useParams() ) // note that the value in the object is aways a string, must convert to number, depending on the API

  const [name, setName] = useState('default')
  const {id} = useParams()

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt( id ) ) // parseInt converts the string to a number
    setName(newPerson.name)
  }, [])


  return (
    <div>
      <h1>{name}</h1>
      <Link to='/people' className='btn'>Back to people</Link>
    </div>
  )
}

export default Person