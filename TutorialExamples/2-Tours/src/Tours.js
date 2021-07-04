import React from 'react';
import Tour from './Tour';

const Tours = ( {tours} ) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline' />
      </div>
      <div>
        {tours.map((tour) => <Tour key={tour.id} {...tour}  /> )}
      </div>

    </section>
  )
};

export default Tours;
