import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DiagonAlley () {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('/api/houses').then(response => {
            console.log(response.data)
            setHouses(response.data)
        }) 
    }, [])

    onMouseMove = (event) => {
        setX(event.screenX)
        setY(event.screenY)
        console.log(X, Y)
    }

    return (
        <div onMouseMove={onMouseMove}>
            <h1>Welcome to Diagona Alley</h1>
            <h3>trace the shape to gain entrance!</h3>
        </div>
    )
}

export default DiagonAlley