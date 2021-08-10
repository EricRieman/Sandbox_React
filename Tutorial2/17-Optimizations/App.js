// Performace optimization: React.memo, useCallback, useMemo, 
// Memoizing is a term used when caching results, using memory
// React is fast by default, optimizations add their own costs

// Remember that every time props or state changes, components re-render.
// So, in this example, every time we click the button, count changes
// and it triggers a re-render. Then each component in the list is
// re-rendered, triggering (in this case) 13 re-renders every click. 

// The solution is to use the memo method from react, where we pass
// in the entire component, see the BigList component. React is checking
// the props for any any changes, becasue those dont change on the count
// button clicks, it no longer re-renders. Memo is 'memorizing' the 
// component and checking for props or state changes.

// Another re-render trigger occurs when passing a function pointer
// down as a prop. Every time the page renders, the function is created 
// and react thinks that prop is changing, so the memo method does not work.
// Review the addToCart for an example

// Another re-render trigger will occur when calling a function. This function
// could also take a long time to run, and if nothing is changing, there
// is no need to re-render every function call. To solve this, pass that function 
// pointer into useMemo, and provide a dependancy list, which ensures the component
// only re-renders when the function is called if something in that list changes. 
// Review the CalculateMostExpensive function for an example

// React generates a warning in our custom useFetch becasue it wants getProducts
// in its useEffect dependancy array. However, adding that dependancy would 
// casue an infinite loop because triggering the getProducts causes a re-render
// which we dont want to do in useEffect. So, we can wrap the getProducts in a 
// useCallback to ensure it only gets rendered if products change. Then, we can 
// safely add getProducts in the useEffect dependancy list.
  
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from './useFetch'

const url = 'https://course-api.com/javascript-store-products'

const CalculateMostExpensive = (data) => {
  return data.reduce((total, item)=>{
    const price = item.fields.price
    if(price >= total)
      total = price
    return total
  },0)/100
}

const App = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  // We assign this function to useCallBack and pass in the arrow function with the functionality we want. 
  // Then, we also include a dependancy list to ensure the useCallBack method is created every time the
  // cart state changes.
  const addToCart = useCallback( () => {
    setCart(cart + 1)
  }, [cart] )

  const mestExpensive = useMemo( ()=> {

  })

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{margin: '3rem'}}>cart: {cart}</h1>
      <h1>Most expensive: ${CalculateMostExpensive(products)}</h1>
      <BigList products={products} addToCart={addToCart}/>
    </>
  )
}

const BigList = React.memo( ({ products, addToCart }) => {
  useEffect(() => {
    console.count('big list called')
  })

  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product} addToCart={addToCart}></SingleProduct>
      })}
    </section>
  )
} )

const SingleProduct = ({ fields, addToCart}) => {
  useEffect(() => {
    console.count('single item called')
  })

  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick = {addToCart}>add to cart</button>
    </article>
  )
}
export default App