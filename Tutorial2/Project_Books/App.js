import React from "react"

import "./app.css"

import books from "./Books"
import Book from "./Book"

function App() {
    const mappedBooks = books.map( (book) => <Book {...book} key={book.id}/> )

    return (
        <div className = "book-list" >
            {mappedBooks}
        </div>       
    )
}

export default App