import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DiagonAlley () {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    function onMouseMove (event)  {

        setX(event.screenX)
        setY(event.screenY)
        console.log(X, Y)
    }

    return (
        <div className='backgroundDiv'>
            <div>
                <h1>Welcome to Diagona Alley</h1>
                <h3>trace the shape to gain entrance!</h3>
            </div>
            <div className='container'>
                <div onMouseDown={onMouseMove} className='diagonDiv'></div>
            </div>
        </div>
    )
}

export default DiagonAlley