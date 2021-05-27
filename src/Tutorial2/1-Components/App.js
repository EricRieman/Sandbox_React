import React from "react"

function App() {
    return (
        <div>
            <Person/>
            <Message/>
        </div>
    )
}

const Person = () => <h2>John Doe</h2>
const Message = () => <p>This is my message</p>

export default App