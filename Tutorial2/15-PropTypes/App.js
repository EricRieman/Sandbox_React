// Prop types allow us to validate props passed into components.
// Many times when fetching data from an API, values may be missing.
// in this example, the last object returned from the API does not
// have a price and image.

// To check for this, we can use a package that comes with react 
// called prop-types. Then to correct for this, we can use default
// props or short circuit operators. Short circuit operators can be
// used alone if the conditions are 'simple' see Products.js for details.

import React from 'react';
import {useFetch} from './useFetch'
import Product from './Product'

const url = 'https://course-api.com/react-prop-types-example'

const App = () => {
  const {loading, products} = useFetch(url);

  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {loading ? <p>Loading</p> : products.map( product => <Product key={product.id} {...product}/> ) }
      </section>
    </div>
  )
}
export default App;