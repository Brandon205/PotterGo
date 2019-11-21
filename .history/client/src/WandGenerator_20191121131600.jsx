import React, { useState, useEffect } from 'react'
import axios from 'axios'

function WandGenerator () {

    const [character, setCharacters] = useState([])
    const [singleChar, setSingleChar] = useState('')
    const [personPicked, setpersonPicked] = useState(false)

    useEffect(() => {
        axios.get('/api/wands').then(response => {
            console.log(response.data)
            setCharacters(response.data)
        }) 
    }, [])

    function handleClick (event) {
        setSingleChar(event.target.toString())
        // let myString = event.target.toString()
        // let myEditedString = myString.match(/"\w*[^"]/)
        console.log(event.target.charId)
        setpersonPicked(true)
        
    }

    var hogwartsCharacters;
    if (personPicked) {
        hogwartsCharacters = singleChar
    } else {
        hogwartsCharacters = character.map((ele, id) => <button key={id} onClick={handleClick(ele._id)}>{ele.name}</button>)
    }
    return (
        <>
            <h1>Welcome to Ollivanders!</h1>
            <h3>The way to start your magical journey with a wand is to name your favorite harry potter character!</h3>
            {hogwartsCharacters}
        </>
    )
}

export default WandGenerator