import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({item, handleEdit, handleDelete}) => {
  return (
    <div className='grocery-item'>
      <h4>{item}</h4>

      <button className='edit-btn' onClick={()=>{handleEdit()}}>
        <FaEdit />
      </button>

      <button className='delete-btn' onClick={()=>{handleDelete()}}>
        <FaTrash />
      </button>

    </div>
  )
}

export default List
