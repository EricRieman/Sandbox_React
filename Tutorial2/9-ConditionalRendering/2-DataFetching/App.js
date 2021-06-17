import React, {useState, useEffect} from 'react';

// We can use conditional rendering to show a 'loading message' while
// data is being fetched, and an 'error message' if there was a problem

const url = 'https://api.github.com/users/QuincyLarson'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')

  //Not using async/await here, so no need to move this into its own function
  useEffect(() => {
    fetch(url)
      .then(resp => {
        if( resp.status >= 200 && resp.status <= 300 )
          return resp.json()
        else {
          setIsLoading( false )
          setIsError( true )
          throw new Error( resp.statusText )
        }
      })
      .then(user => {
        const {login} = user //extract login string from user (response) object
        setUser(login)
        setIsLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  if( isLoading )
    return <p>Loading</p>

  if( isError )
    return <p>Error</p>

  return <h1>{user}</h1>
}

export default App;