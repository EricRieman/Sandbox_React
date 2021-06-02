import React from 'react';
import {data} from "./data"

const App = () => {
  //we can either import useState, or access from React like below
  const [people, setPeople] = React.useState([data])
  
  return ( <> {
    people.map((person) => {
      const {id, name} = person
      return (
        <div key={id} className="item">
          <h4>{name}</h4>
        </div>
      )
    })
  }
  </>
  )
}

export default App;