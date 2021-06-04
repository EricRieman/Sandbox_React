// create an array of product data, render a component for each product
// use array's mapped method, pass in a 'key' prop to avoid the warning
import React from "react"
import Product from "./Product"
import productData from "./productData"

function App() {
    const productComponents = productData.map( data => <Product key ={ data.id } product = {data} /> );

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App;