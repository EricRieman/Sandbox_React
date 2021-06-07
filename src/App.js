import React, { useState } from 'react';
import data from './data';
import List from './List'; 

const App = () => {

  const [people, setPeople] = setState(data)

  const handleClick = () => {
    setPeople([])
  }

  return <main>
    <section className="container">
      <h3>0 birthdays today</h3>
      <List people={people}/>
      <button onClick={handleClick}>Clear All</button>
    </section>
  </main>;
}

export default App;
