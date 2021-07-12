import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const App = () => {
const allCategories = new Set( items.map(item => item.category) )// map all categories, then use a Set to filter for uniqueness

const categories = ['all', ...allCategories ]
const [categoryIndex, setCategoryIndex]= useState(0)

  const selectedMenu = items.filter( (item) => {
    return categoryIndex === 0 || item.category === categories[categoryIndex]
  })

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'/>
          <Categories 
            categories={categories}
            index={categoryIndex}
            setCategoryIndex={setCategoryIndex}
          />
          <Menu items={selectedMenu} />
        </div>
      </section>
      
    </main>
  )
}

export default App;
