import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ApiPage () {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        axios.get('/api').then(response => {
            setHouses(response)
        }) 
    })


    return (

    )
}

export default ApiPage