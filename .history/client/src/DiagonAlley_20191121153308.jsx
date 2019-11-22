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

    var winning;
    // if (X > 500 || y > 480)

    return (
        <div className='backgroundDiv'>
            <div>
                <h1>Welcome to Diagona Alley</h1>
                <h3>trace the shape to gain entrance!</h3>
            </div>
            <div className='container'>
                <div onMouseMove={onMouseMove} className='diagonDiv'></div>
                <div className='innerDiv'></div>
            </div>
        </div>
    )
}

export default DiagonAlley