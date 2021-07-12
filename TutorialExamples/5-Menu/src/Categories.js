import React from 'react';

const Categories = ( {categories, setCategoryIndex}) => {
  
  return (
    <div className='btn-container'>
      { categories.map( (category, index) => { // we can use index when mapping an array
        return (
          <button
            key={index} 
            onClick={()=>{setCategoryIndex(index)}} 
            className='filter-btn'>{category}
          </button>
      )})}
    </div>
  )
}

export default Categories;
