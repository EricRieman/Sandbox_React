import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <p>Oops! this page doesnt exist...</p>
      <Link to='/'>Back home</Link>
    </div>
  )
}

export default ErrorPage
