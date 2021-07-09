import React from 'react'
import PropTypes from 'prop-types'

import defaultImage from './assets/default-image.jpeg'

const Product = ({name, image, price}) => {
  return (
    <article className='product'>
      
      {/*Using PropTypes */}
      <h4>{name}</h4>
      <img src={image.url} alt={name} />
      <p>${price}</p>

      {/*Using short circuit operator */}
      <h4>{name}</h4>
      <img src={image && image.url || defaultImage} alt={name} /> {/*Check if image in undefined before accessing the url*/}
      <p>${price || 3.99}</p> {/*If price is undefined, the or operator can be used to resturn 3.99 (a default value) instead*/}
    </article>
  )
}

Product.propTypes = {                 // every component has the propTypes property
  image: PropTypes.object.isRequired, // the image property should be an object and is required
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

//Setting up a default props, to be used when required props are missing
Product.defaultProps = {
  name:'default name',
  price: 3.99,
  image: defaultImage // THIS WILL NOT WORK becasue image is an object, we need to use short circuit operator instead
}

export default Product
