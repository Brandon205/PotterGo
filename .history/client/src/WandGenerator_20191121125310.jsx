import React, { useState, useEffect } from 'react'
import axios from 'axios'

function WandGenerator () {

    const [character, setCharacters] = useState([])
    const [singleChar, setSingleChar] = useState('')
    const [personPicked, setpersonPicked] = useState(flase)

    useEffect(() => {
        axios.get('/api/wands').then(response => {
            console.log(response.data)
            setCharacters(response.data)
        }) 
    }, [])

    function handleClick (event) {
        setpersonPicked(true)
        console.log(event.target)
        setSingleChar(event.target.toString())
    }

    var hogwartsCharacters;
    if (personPicked) {
        hogwartsCharacters = 'wand'
    } else {
        hogwartsCharacters = character.map((ele, id) => <button key={id} onClick={handleClick}>{ele.name}</button>)
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