// Event handling in react is simple, and compares to regular
// html by assingning a function to an "onclick" property. 
// in jsx, we use to same property, but camel case, "onClick"

function handleMouseOver() {
    console.log("I am hovering" );
}

function App() {
    return (
        <div>
            <img onMouseOver={handleMouseOver} 
                 src ='https://www.fillmurray.com/200/100'/>
            <br />
            <br />
            <button onClick={ () => {console.log("i was clicked")}}>Click me</button>
        </div>
    )
}

export default App;