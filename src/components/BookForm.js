import React, {useContext, useState} from 'react';
import {BookContext} from "../contexts/BookContext";

function NewBookForm(props) {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault()
        addBook(title, author)
        setTitle("")
        setAuthor("")
    }

    return (
        <form onSubmit={handlerSubmit}>
            <input type="text" placeholder="book title" value={title}
                   onChange={(e) => setTitle(e.target.value)} required/>

            <input type="text" placeholder="author title" value={author}
                   onChange={(e) => setAuthor(e.target.value)} required/>

            <input type="submit" value="add book"/>
        </form>
    );
}

export default NewBookForm;