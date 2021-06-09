import React, {useState, useEffect} from 'react';

//We use async/await to fetch data for efficiency, but our callback function 
//in a hook (useState) cannot be used becasue it returns a promise. So, we
//define it as a separate function

//It is important that we DO NOT call our setState function (setUsers) inside
//of our useEffect method (getUsers) becasue setState tiggers a re-render and 
//useEffect gets triggered by that re-render (infinite loop). To negate this,
//we can set useEffect's input (second param) to an empty array.

const url = "https://api.github.com/users"

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url)
    const users = await response.json();
    setUsers(users);
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className ="container">
        <h3>Github Users</h3>
        <ul className = "users">
        {
          users.map( (user) => {
            const {id, login, avatar_url, html_url} = user
            return  <li key = {id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href = {html_url}>Profile</a>
              </div>
            </li>
          })
        }
        </ul>
    </div>
  )
}

export default App;