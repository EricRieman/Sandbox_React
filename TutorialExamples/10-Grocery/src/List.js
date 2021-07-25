import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({groceryList, removeItem, editItem}) => {
  return (
    <div className='grocery-list'>
      {groceryList.map((item)=>{
        return(
          <article key={item.id} className='grocery-item'>
            <p className='title'>{item.title}</p>
      
            <div className = 'btn-container'>
              <button className='edit-btn' onClick={()=>{editItem(item.id)}}>
                <FaEdit />
              </button>
              <button className='delete-btn' onClick={()=>{removeItem(item.id)}}>
                <FaTrash />
              </button>
            </div>
        </article>
      )})}
    </div>
  )
}

export default List