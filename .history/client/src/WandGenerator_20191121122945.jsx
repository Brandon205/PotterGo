import React, { useState, useEffect } from 'react'
import axios from 'axios'

function WandGenerator () {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('/api/wands').then(response => {
            setHouses(response.data)
        }) 
    }, [])

    const hogwartsCharacters = houses.map((ele, id) => <p key={id}>{ele.name}</p>)

    return (
        <>
            <h1>Welcome to Ollivanders!</h1>
            <h3>The way to start your magical journey with a wand is to name your favorite harry potter character!</h3>
            {hogwartsHouses}
        </>
    )
}

export default WandGenerator