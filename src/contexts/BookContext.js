import React, {createContext, useReducer, useEffect} from 'react';
import {bookReducer} from "../reducers/BookReducer";

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [], () => {
        // If page refresh localStorage is []
        // For fix this problem get date of localStorage before refresh page and set for initial into localStorage
        const localData = localStorage.getItem("books")
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books))
    }, [books]) // Every time change books set All books to localStorage

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}


export default BookContextProvider