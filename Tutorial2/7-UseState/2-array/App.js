import React from 'react';
import {data} from "./data"

const App = () => {
  //we can either import useState, or access from React like below
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    //Here, we can use array's filter method to remove a specific person by id
    setPeople( people.filter((person) => person.id !== id) )
  }

  return ( <> {
    people.map((person) => {
      const {id, name} = person

      return (
        <div key={id}>
          <h4>{name}</h4>
            {/*Here, we create a button handler and pass in the id to edit the people array
              remember to use an arrow function here, else the function get invoked on creation*/ }
            <button onClick = { () => removeItem(id) }>Remove</button>
        </div>
      )
    }) }
  
  {/*We can see below that we can call the setPeople function to overwrite the people array,
    in this case, we want to clear the array, so we pass in an empty array*/ }
  <button className = "btn" onClick={() => setPeople([])}>
    Clear Items
  </button>
  </>
  )
}

export default App;