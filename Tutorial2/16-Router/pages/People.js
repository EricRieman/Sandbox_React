import React, {useState} from 'react'
import {data} from '../data'
import {Link} from 'react-router-dom'

const People = () => {
  const [people, setPeople] = useState(data)

  return (
    <div>
      <h1>People tag</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            {/*The path here must match what is defined in the Router*/}
            <Link to={`/person/${person.id}`}>Learn more</Link>
          </div>
        )
      })}
    </div>
  )
}

export default People
