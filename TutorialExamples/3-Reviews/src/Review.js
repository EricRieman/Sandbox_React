import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0);
  const {name,job,image,text} = people[index]

  const handleNextClick = () => {
    setIndex( index === people.length - 1 ? 0 : index + 1 )
  }

  const handlePrevClick = () => {
    setIndex( index === 0 ? people.length - 1 : index - 1  )
  }

  const handleRandCick = () => {
    setIndex(Math.floor( Math.random() * people.length))
  }

  return (
    <article className='review'>
      <div className = 'img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className ='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className ='button-container'>
        <button className='prev-btn' onClick={handlePrevClick}>
          <FaChevronLeft/> 
        </button>
        <button className='next-btn' onClick={handleNextClick}>
          <FaChevronRight/>
        </button>
      </div>
      <buton className='random-btn' onClick={handleRandCick}>surprise me</buton>
    </article>
  )
};

export default Review;
