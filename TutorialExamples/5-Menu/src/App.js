import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const App = () => {
  const [mentItems, setMenuItems] = useState(items)
  const [categorites, setCategories] = useState(['lunch'])
  const [categoryIndex, setCategoryIndex]= useState(0)

  const selectedMenu = mentItems.filter( (item) => {
    return item.category === categorites[categoryIndex]
  })

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'/>
          <Categories 
            categorites={categorites}
            setCategoryIndex={setCategoryIndex}
          />
          <Menu items={selectedMenu} />
        </div>
      </section>
      
    </main>
  )
}

export default App;
