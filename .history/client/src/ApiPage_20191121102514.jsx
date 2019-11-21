import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function ApiPage (props) {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        Axios.get('/api').then()
    })

    return (

    )
}

export default ApiPage