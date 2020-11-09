import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import SongForm from "./SongForm";


const SongList = () => {
    // Concept using "useState" and "useEffect"

    const [songs, setSongs] = useState([
        {title: 'song 1', id: 1},
        {title: 'song 2', id: 2},
        {title: 'song 3', id: 3}
    ]) // Initial value is list of dictionary songs

    const [age, setAge] = useState(24) // Initial value is 24


    const addSong = (title) => {
        return setSongs([...songs, {title, id: uuidv4()}])
    } // Add new song to songs state variable

    useEffect(() => {
        console.log("useEffect hook ran without inputs")
    }) // Call every time update or refresh or render or re-render page

    useEffect(() => {
        console.log("useEffect hook ran", songs)
    }, [songs]) // Call after change songs

    useEffect(() => {
        console.log("useEffect hook ran", age)
    }, [age]) // Call after change age

    useEffect(() => {
        console.log("useEffect hook ran []")
    }, []) // Call after page refresh


    return (
        <div className="song-list">
            <h3>Concept using "useState" and "useEffect"</h3>
            <ul>
                {songs.map(song => {
                    return (
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>

            <SongForm addSong={addSong}/>
            <br/>
            <button onClick={() => setAge(age + 1)}>Your age is : {age}</button>
        </div>
    );
};

export default SongList