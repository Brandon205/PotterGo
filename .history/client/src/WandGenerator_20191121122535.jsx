import React, { useState, useEffect } from 'react'
import axios from 'axios'

function WandGenerator () {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('/api/wands').then(response => {
            setHouses(response.data)
        }) 
    }, [])

    const hogwartsHouses = houses.map((ele, id) => <p key={id}>{ele.name}</p>)

    return (
        <>
            <h1>Api Page</h1>
            {hogwartsHouses}
        </>
    )
}

export default WandGenerator