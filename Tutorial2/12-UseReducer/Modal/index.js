// When splitting up code, it is common practice to move all related
// files (components) into one folder, then in that folder, have an
// index.js, which will be the main entry. This means that an import 
// from the folder (do not include a file name) react will import
// index.js by default. Then, everything needed is imported/exported
// in index.js. Could aslo put logic here too.

// originally, this componeent had a useState defined for people and 
// and showModal. Instead, we can use the useReducer hook to handle
// the states instead. It is setup similarly to useEffect, it is 
// common practice call the variable 'state' and the function 
// 'dispatch'. It takes a reducer method, commonly called 'reducer' 
// and an initial state.

// We can think of useReducer as taking in the old state, performing 
// an action, then returning the 'new' state back. The dispatch method
// provided is called with a user defined action string, which is then
// parsed/Redcaught and handled to update the state.

import React, { useState, useReducer } from 'react';
import Modal from './Modal';
//import { data } from '../data'; // only used during tutorial setup
import reducer from './reducer'

const defaultState = {
  people:[],
  isModalOpen: false,
  modalContent: 'hello'
}

const Index = () => {
  const [name, setName] = useState('')
  const [state, dispatch] = useReducer(reducer, defaultState )

  const handleSubmit = (e) => {
    e.preventDefault()
    // useReducer's dispatch method always takes an object with property type
    // which is set to a string, defining the action. This is typically all upper case, with _
    // the payLoad property is another naming convention, but it can be whatever you want
    if(name) {
      const newItem = {id:new Date().getTime().toString(), name}
      dispatch({type:'ADD_ITEM', payLoad: newItem })
      setName('')
    } else {                                            
      dispatch({type:'NO_VALUE'})                       
    }
  }

  const closeModal = () => {
    dispatch({type:"CLOSE_MODAL"})
  }

  return <>
    {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal={closeModal}/>}
    <form onSubmit ={handleSubmit} className="form">
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <button type='submit'>add</button>
    </form>
    {state.people.map((person) => {
      return ( 
        <div key={person.id} className='item'>
          <h4>{person.name} </h4>
          <button onClick={()=>{dispatch({type: "REMOVE_ITEM", payLoad: person.id})}}>Remove</button>
        </div>
      )
    })}
  </>
};

export default Index;
