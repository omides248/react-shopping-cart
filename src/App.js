import React from "react";
import './App.css'
import SongList from "./components/SongList";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";

function App() {
    return (
        <div className="App">
            <BookContextProvider>
                <SongList/>
                <Navbar/>
                <BookList/>
                <NewBookForm/>
            </BookContextProvider>
        </div>
    );
}

export default App;
