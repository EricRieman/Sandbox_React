function Product ( props ) {
    return (
        <div>
            <p>Product name: {props.product.name }</p>
            <p>Product height: {props.product.height}</p>
        </div>
    )
}

export default Product;