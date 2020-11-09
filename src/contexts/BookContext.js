import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from "uuid"

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {id: 1, title: "title 1", author: "author 1"},
        {id: 2, title: "title 2", author: "author 2"},
    ])

    const addBook = (title, author) => {
        setBooks([...books, {id: uuidv4(), title, author}])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}


export default BookContextProvider