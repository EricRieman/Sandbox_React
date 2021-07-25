import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  const list = localStorage.getItem('list')
  return list ? JSON.parse( list ) : []
}

const App = () => {
  const [groceryItem, setGroeryItem] = useState('')
  const [groceryList, setGroceryList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show:false, msg:'', type:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    if( !groceryItem)
      showAlert(true, 'danger', 'please enter value' )
    else if( groceryItem && isEditing ) {
      setGroceryList(groceryList.map((item) => {
        if( item.id === editID )
          return {...item, title: groceryItem}
        return item
      }))

      setGroeryItem('')
      setIsEditing(false)
      setEditID(null)
      showAlert(true, 'success', 'value changed')
    }
    else{
      showAlert(true,'success', 'item added to the list')
      const newItem = {id: new Date().getTime().toString(), title:groceryItem}
      setGroceryList( [newItem, ...groceryList] )
      setGroeryItem('')
    }
  }

  const showAlert = (show=false, type="", msg="") => {
    setAlert({show:show, type:type, msg:msg})
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list' )
    setGroceryList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed')
    setGroceryList(groceryList.filter((item)=>item.id !== id))
  }

  const editItem = (id) => {
    const item = groceryList.find((item) => item.id === id)
    showAlert(true, 'danger', 'editing item')
    setIsEditing(true)
    setEditID(id)
    setGroeryItem(item.title)
  }

  useEffect (() => {
    localStorage.setItem('list', JSON.stringify(groceryList))
  }, [groceryList])

  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='grocery-form'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={groceryList}/>}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            value={groceryItem}
            onChange={(e)=>{setGroeryItem(e.target.value)}}
            className='grocery'
            placeholder='e.g. eggs'/>
          
          <button
            type='submit'
            className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>

      { groceryList.length === 0 || (
      <div className='grocery-container'>
        <List groceryList={groceryList} removeItem={removeItem} editItem={editItem} />
        <button onClick={clearList} className='clear-btn'>clear items</button>
      </div>
      )}

    </section>
  ) 
}

export default App