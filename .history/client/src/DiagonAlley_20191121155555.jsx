import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DiagonAlley () {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    const [breaking, setBreaking] = useState(false)
    const [youFaileda, setyouFaileda] = useState('')

    function onMouseMove (event)  {
        setX(event.screenX)
        setY(event.screenY)
        console.log(X, Y)
    }

    function onMouseMoveTwo (event)  {
        setBreaking(true)
        setyouFaileda('The wall stays solid! Please try again!')
        console.log('You have failed')
    }
    
    function onClick (event) {
        setyouFaileda('')
    }

    var youFailed;
    var youFailedFinal;
    if (breaking) {
        youFailed = youFaileda
        youFailedFinal = <h3>{youFailed}</h3>
    } else {
        youFailed = ''
    }
    return (
        <div className='backgroundDiv'>
            <div>
                <h1>Welcome to Diagona Alley</h1>
                <h3>trace the shape to gain entrance!</h3>
            </div>
            <div className='container'>
                <div onMouseMove={onMouseMove} className='diagonDiv'>
                <div onMouseDown={onMouseMoveTwo} className='innerDiv'></div>
                </div>
            </div>
            <div>
                {youFailedFinal}
                <button onClick={onClick} className='tryAgain'>Try Again</button>
            </div>
        </div>
    )
}

export default DiagonAlley