import React from "react"

import "./app.css"

function App() {
    const books = [
        {
            img: "https://images-na.ssl-images-amazon.com/images/I/61pJRtxpm3L._AC_UL210_SR210,210_.jpg",
            title: "Groundwater Science",
            author: "Charles R. Fitts",
            id: 0
        },
        {
            img: "https://images-na.ssl-images-amazon.com/images/I/51qQ7tba6-L._SX382_BO1,204,203,200_.jpg",
            title: "Fundamentals of Hydrology",
            author: "Tim Davie",
            id: 1
        }
    ]

    const mappedBooks = books.map( (book) => <Book {...book} key={book.id}/> )

    return (
        <div className = "book-list" >
            {mappedBooks}
        </div>       
    )
}

const Book = (props) => {
    return (
    <div className = "book" onMouseOver={() => { console.log(props.title) }}> 
        <Image img = {props.img}/>
        <Title title = {props.title} />
        <Author author = {props.author} />
        <Button1 text = "Buy"/>
        <Button2 text = "Sell"/>
    </div>
    )
}

const Image = ({img}) => {
    return (
        <img src={img} alt=" " />
    )
}

const Title = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

const Author = ({author}) => {
    const stlye = {
        color: "#617d98",
        fontSize: "0.75rem",
        marginTop: "0.25rem"
    }
    return (
        <h4 style={stlye}>{author}</h4>
    )
}

const handleClick = (text) => {
    alert( "hello" )
    console.log(text )
}

const Button1 = (props) => {
    return (
        <button type="button" onClick={handleClick}>
            {props.text}
        </button>
    )
}

// using onClick={handleClick(props.text)} does not do exactly what we want because 
// when the page gets rendered, the function gets invoked. Instead, to pass in arguments,
// we need to use an arrow function

const Button2 = (props) => {
    return (
        <button type="button" onClick={ () => handleClick(props.text)}>
            {props.text}
        </button>
    )
}




export default App

// 2:21:45