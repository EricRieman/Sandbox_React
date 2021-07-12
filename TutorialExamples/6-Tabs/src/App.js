import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight, FaUserTimes } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [jobIndex, setJobIndex] = useState(0)

  const fetchJobs = async () => {
    const res = await fetch(url)
    const newJobs = await res.json()
    setJobs(newJobs)
    setLoading()
  }

  useEffect( () => {
    fetchJobs()
  }, [])

  if( loading )
    return (
      <secttion className='section loading'>
        <h1>loading...</h1>
      </secttion>
    )

    // destructuring MUST be done after the loading return, else jobs will be empty
  const {company, dates, duties, title } = jobs[jobIndex]

  return(
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>

      <div className = 'jobs-center'>
        <div className= 'btn-container'>
          {jobs.map((job, index) => {
            return (
            <button 
              key={job.id} 
              onClick={()=>setJobIndex(index)}
              className = {`job-btn ${index === jobIndex && 'active-btn'}`}
            >
              {job.company}
            </button>
          )})}
        </div>

        <artcle className = 'job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
            <div key={index} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'/>
              <p>{duty}</p>
            </div>
          )})}
        </artcle>

      </div>
    </section>
  )
}

export default App
