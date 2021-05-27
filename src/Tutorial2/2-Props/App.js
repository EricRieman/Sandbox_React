import React from "react"

import "./app.css"

function App() {
    const book1 = {
        img: "https://images-na.ssl-images-amazon.com/images/I/61pJRtxpm3L._AC_UL210_SR210,210_.jpg",
        title: "Groundwater Science",
        author: "Charles R. Fitts"
    }
    
    const book2 = {
        img: "https://images-na.ssl-images-amazon.com/images/I/51qQ7tba6-L._SX382_BO1,204,203,200_.jpg",
        title: "Fundamentals of Hydrology",
        author: "Tim Davie"
    }

    return (
        <div className = "book-list" >
            < Book data={book1} />
            < Book data={book2} />
            < Book data={book1} />
            < Book data={book2} />

            <Book Book data={book1}> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Culpa vitae commodi, eius beatae ut cumque nobis voluptatum 
                aspernatur dolorem quo molestias eum accusantium corrupti eos 
                laboriosam. Perspiciatis, ab ut? Fuga.</p>
            </Book>
        </div>       
    )
}

//instead of using props, we could just list the parameters being passed,
// removing the need for the props variable

// We can access children elements of the component by passing in the
// 'children' keyword, as shown below.

const Book = ({data, children}) => {
    return (
    <div className = "book">
        <Image img = {data.img}/>
        <Title title = {data.title} />
        <Author author = {data.author} />
        {children}
    </div>
    )
}

const Image = (props) => {
    return (
        <img src={props.img} alt=" " />
    )
}

const Title = (props) => {
    return (
        <h1>{props.title}</h1>
    )
}

// Note that the JSX styling below will always overwrite whatever is in the .css file,
// if both style types are applied (color in the below example)
const Author = (props) => {
    const stlye = {
        color: "#617d98",
        fontSize: "0.75rem",
        marginTop: "0.25rem"
    }
    return (
        <h4 style={stlye}>{props.author}</h4>
    )
}

export default App

// 2:21:45