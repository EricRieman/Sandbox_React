import React from "react"
import MyFooter from "./MyFooter"

// MyFooter is a child of App, App is a parent of MyFooter

function App()
{
    return (
        <div>
            <nav>
                <h1>Hello</h1>
                <ul>
                    <li>Thing1</li>
                    <li>Thing2</li>
                    <li>Thing3</li>
                </ul>
            </nav>
            <main>
                <p>Main content</p>
            </main>
            <MyFooter /> 
        </div>
    )
}

export default App;