import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DiagonAlley () {
    const [X, setX] = useState(0)
    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('/api/houses').then(response => {
            console.log(response.data)
            setHouses(response.data)
        }) 
    }, [])

    const hogwartsHouses = houses.map((ele, id) => <p key={id}>{ele.name}</p>)

    return (
        <>
            <h1>Welcome to Diagona Alley</h1>
            <h3>trace the shape to gain entrance!</h3>
        </>
    )
}

export default DiagonAlley