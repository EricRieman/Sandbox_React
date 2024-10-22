import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() =>{
    const lastIndex = people.length - 1
    if( index < 0)
      setIndex(lastIndex)
    else if ( index > lastIndex )
      setIndex(0)
  }, [index, people])

  useEffect(()=>{
    let autoSlide =  setInterval(()=>{
      setIndex(index + 1)
    }, 3000)
    return(()=>clearInterval(autoSlide))
  }, [index] )

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className ='section-center'>
        {people.map((person, personIndex) => {
          const {id, image, name, title, quote } = person
          let position = 'nextSlide'
          if(personIndex === index)
            position = 'activeSlide'
          if(personIndex === (index === 0 ? people.length - 1: index - 1))
            position = 'lastSlide'
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          )
        })}

        <buton className='prev' onClick={()=>setIndex(index - 1)}>
          <FiChevronLeft />
        </buton>

        <buton className='next' onClick={()=>setIndex(index + 1)}>
          <FiChevronRight />
        </buton>
      </div>
    </section>
  )
}

export default App;
