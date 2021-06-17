import React from 'react';

// We can conditionally return a different html element from a component

const App = () => {
  if( isLoading )
    return <p>Loading</p>

  return <p>Not loading</p>
}

export default App;