import React from 'react';

const ErrorExample = () => {
  let title = 'randome title'
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>Click Me</button> 
    </React.Fragment>
  )
}

const handleClick = () => {
  console.log("ok")
}

export default ErrorExample;
