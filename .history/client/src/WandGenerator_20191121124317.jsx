import React, { useState, useEffect } from 'react'
import axios from 'axios'

function WandGenerator () {

    const [character, setCharacters] = useState([])

    useEffect(() => {
        axios.get('/api/wands').then(response => {
            console.log(response.data)
            setCharacters(response.data)
        }) 
    }, [])

    handleClick = (event) => {
        console.log(event.target)
    }

    var personPicked = false;
    var hogwartsCharacters;
    if (personPicked) {
        hogwartsCharacters = 'wand'
    } else {
        hogwartsCharacters = character.map((ele, id) => <p key={id} onClick={this.handleClick}>{ele.name}</p>)
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