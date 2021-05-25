import React from "react"

export function Conditional(props) {
    return (
        <h1>{props.isLoading ? "Loading" : "Done"} </h1>
    )
}

export function Conditional2() {
    return (
        <h1>{"Done"} </h1>
    )
}


export default Conditional;