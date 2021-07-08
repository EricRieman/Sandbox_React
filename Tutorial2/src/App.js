// Prop types allow us to validate props passed into components.

import React from 'react';
import {useFetch} from './useFetch'
import Product from './Product'

const url = 'https://course-api.com/react-prop-types-example'

const App = () => {
  const {products} = useFetch(url);

  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map( product => { 
          return <Product/>
        } )}
      </section>
    </div>
  )
}
export default App;