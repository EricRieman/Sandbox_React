import React, { useState } from 'react';

const Tour = ( {id, image, info, name, price} ) => {
  
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className = 'tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
      </footer>
    </article>
  )
};

//37:00

export default Tour;