import React, {useState} from 'react'

const SongForm = ({addSong}) => {
    const [title, setTitle] = useState("") // Initial value is empty string

    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(title) // Get function for call of parent component
        setTitle("")
    }

    return (
        <form onSubmit={handleSubmit}> {/* Call after click submit */}
            <label htmlFor="name">Song name:</label>
            <input type="text" value={title} required
                   onChange={(e) => setTitle(e.target.value)}/> {/* onChanged call every change value (Enter key value) */}
            <input type="submit" value="add song"/>
        </form>
    )
}

export default SongForm