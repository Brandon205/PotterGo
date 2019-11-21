import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ApiPage () {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('/api').then(response => {
            setHouses(response)
        }) 
    })

    const harryHouses = 
    return (
        <h1>Api Page</h1>
    )
}

export default ApiPage