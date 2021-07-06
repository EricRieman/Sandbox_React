// When splitting up code, it is common practice to move all related
// files (components) into one folder, then in that folder, have an
// index.js, which will be the main entry. This means that an import 
// from the folder (do not include a file name) react will import
// index.js by default. Then, everything needed is imported/exported
// in index.js. Could aslo put logic here too.

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../data';
// reducer function

const Index = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const [showModal, setShowModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if(name) {
      setShowModal(true)
      setPeople([...people, {id: new Date().getTime().toString(), name}])
      setName('')
    } else {
      showModal(true)
    }
  }

  return <>
    {showModal && <Modal />}
    <form onSubmit ={handleSubmit} className="form">
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <button type='submit'>add</button>
    </form>
    {people.map((person) => {
      return ( 
        <div key={person.id}>
          <h4>{person.name} </h4>
        </div>
      )
    })}
  </>
};

export default Index;
