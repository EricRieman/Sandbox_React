import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

//const alertTypes = ['add', 'edit', 'remove', 'clear']

const App = () => {
  const [groceryItem, setGroeryItem] = useState('')
  const [groceryList, setGroceryList] = useState([])
  const [alert, setAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setGroceryList( [groceryItem, ...groceryList] )
    setAlert('add')
  }

  const handleClear = (e) => {
    e.preventDefault()
    setGroceryList([])
    setAlert('clear')
  }

  const handleEdit = (e, newText, index) => {
    e.preventDefault()
    const copyList = groceryList
    copyList[index] = newText
    setGroceryList(copyList)
    setAlert('edit')
  }

  const handleDelete = (e, itemIndex) => {
    e.preventDefault()
    setGroceryList(groceryList.filter((item, index)=>index !== itemIndex))
    setAlert('delete')
  }

  useEffect( () => {
    setShowAlert(true)
    const timeout = setTimeout(()=>{
      setShowAlert(false)
    }, 3000)
    return(()=>{ clearTimeout(timeout)})
  },[alert])

  return (
    <section className='section-center'>
      {showAlert && <Alert alert={alert}/>}

      <h2 className='title'>grocery bud</h2>

      <div className='form-control'>
        <form onSubmit={handleSubmit} className='grocery-form'>
          <input type='text' value={groceryItem} onChange={(e)=>{setGroeryItem(e.target.value)}} className='' />
          <button type='submit' className='submit-btn'>{isEditing ? 'edit' : 'submit'}</button>
        </form>
      </div>

      <div className='grocery-container'>
        {groceryList.map((item, index)=>{
          return <List key={index} item={item} handleEdit={handleEdit} handleDelete={handleDelete} />
        })}
      </div>

      <button onClick={handleClear} className='clear-btn'>clear items</button>
    </section>
  ) 
}

export default App
