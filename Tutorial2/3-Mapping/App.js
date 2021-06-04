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

    const mappedBooks = books.map( (book) => <Book data={book} key={book.id}/> )

    // we can use the spread operator to eliminate the data variable, and pass each value of 
    // the book object as seprate parameters.
    const mappedBooks2 = books.map( (book) => <Book2 {...book} key={book.id}/> )

    return (
        <div className = "book-list" >
            {mappedBooks}
            {mappedBooks2}
        </div>       
    )
}

const Book = (props) => {
    return (
    <div className = "book">
        <Image img = {props.data.img}/>
        <Title title = {props.data.title} />
        <Author author = {props.data.author} />
    </div>
    )
}

const Book2 = (props) => {
    return (
    <div className = "book">
        <Image img = {props.img}/>
        <Title title = {props.title} />
        <Author author = {props.author} />
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

export default App

// 2:21:45