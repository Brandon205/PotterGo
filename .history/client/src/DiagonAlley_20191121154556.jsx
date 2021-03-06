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
        console.log('You have failed')
    }

    function onClick (event) {

    }

    var youFailed;
    if (breaking) {
        setyouFaileda('The wall stays solid! Please try again!')
        youFailed = <h2>youFaileda</h2>
    } else {
        setyouFaileda('')
        youFailed = youFaileda
    }
    return (
        <div className='backgroundDiv'>
            <div>
                <h1>Welcome to Diagona Alley</h1>
                <h3>trace the shape to gain entrance!</h3>
            </div>
            <div className='container'>
                <div onMouseMove={onMouseMove} className='diagonDiv'>
                <div onMouseMove={onMouseMoveTwo} className='innerDiv'></div>
                </div>
            </div>
            {youFailed}
            <button onClick={onClick}>Try Again</button>
        </div>
    )
}

export default DiagonAlley