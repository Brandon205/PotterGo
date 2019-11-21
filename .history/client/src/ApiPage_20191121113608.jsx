import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ApiPage () {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('/api').then(response => {
            console.log(response.data)
            setHouses(response.data)
        }) 
    })

    const hogwartsHouses = houses.map((ele, id) => <p key={id}>{ele.name}</p>)

    return (
        <>
            <h1>Api Page</h1>
            {hogwartsHouses}
        </>
    )
}

export default ApiPage