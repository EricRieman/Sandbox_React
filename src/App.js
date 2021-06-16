import React, {useState, useEffect} from 'react';

// We can conditionally return a different html element from
// our component

const url = 'https://api.github.com/users/QuincyLarson'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  if( isLoading )
    return (
      <p>Loading</p>
    )

  return (
    <p>Not loading</p>
  )
}

export default App;