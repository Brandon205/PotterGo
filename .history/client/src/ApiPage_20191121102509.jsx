import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function ApiPage (props) {

    const [houses, setHouses] = useState([])

    useEffect(() => {
        Axios.get('/api')
    })

    return (

    )
}

export default ApiPage