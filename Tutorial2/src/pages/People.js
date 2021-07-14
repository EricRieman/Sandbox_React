import React, {useState} from 'react'
import {data} from '../data'
import {link} from 'react-router-dom'

const People = () => {
  const [people, setPeople] = useState(data)

  return (
    <div>
      <h1>People tag</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default People
