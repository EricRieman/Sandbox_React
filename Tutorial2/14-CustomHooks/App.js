// We can define our own custom hooks to execute and re-use code. This is not
// for html elements (we do that with components), this is for functionality,
// like fetching/saving data. These can be moved into their own file to make 
// it easy to share and help keep our code clean.

// The file and componenet MUST start with 'use' else react will not recognize
// it as a custom hook, and so you cannot use the built in hooks (useState, 
// useEffect, ect.). If you are not using built in hooks and do not prefix
// with 'use', it is recognized as a generic js module.

// note that we are returning an object from our custom hook, so we must
// destructure it appropriatly.

import React from 'react'
import {useFetch} from './useFetch'

const url = 'https://course-api.com/javascript-store-products'

const App = () => {
  const {loading, products} = useFetch(url);

  return (
    <div>
      <h2>{loading ? 'loading' : 'data'}</h2>
    </div>
  )
}
export default App;