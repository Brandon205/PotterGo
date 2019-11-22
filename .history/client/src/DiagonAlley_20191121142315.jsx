import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DiagonAlley () {

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
            
        </>
    )
}

export default DiagonAlley