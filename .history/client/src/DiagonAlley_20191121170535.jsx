import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function DiagonAlley () {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    const [breaking, setBreaking] = useState(false)
    const [youFaileda, setyouFaileda] = useState('')
    const [count, setCount] = useState(0);
    const [redirect, setRedirect] = useState('');

    var counter = count;
    function onMouseMove (event)  {
        setX(event.screenX)
        setY(event.screenY)
        counter+=1
        setCount(counter)
    }

    function onMouseMoveTwo (event)  {
        setBreaking(true)
        setyouFaileda('The wall stays solid! Please try again!')
        setCount(0)
    }
    
    function onMouseDown(event) {
        setCount(5)
    }

    function onClick (event) {
        setyouFaileda('click to begin')
    }

    var youFailed;
    var youFailedFinal;
    if (breaking) {
        youFailed = youFaileda
        youFailedFinal = <h3>{youFailed}</h3>
    } else {
        youFailed = 'click to begin'
        youFailedFinal = <h3>{youFailed}</h3>
    } 
    var wholePage;
    if (count > 20) {
        wholePage = (
            <div className='container'>
                <h1>'YOU WIN, COME ON IN AND FIND A WAND'</h1>
                <Link to='/map'>Go to Checklist to see Achieved Goals and Next Challenge!</Link>
            </div>
        )
    } else if (redirect) {
        console.log('redirect', redirect)
        wholePage = {redirect}
    } else {
        wholePage = (
        <div className='backgroundDiv'>
            <div>
                <h1>Welcome to Diagona Alley</h1>
                <h3>trace the shape to gain entrance!</h3>
            </div>
            <div className='container'>
                <div onMouseMove={onMouseMove} onMouseDown={onMouseDown} className='diagonDiv'>
                <div onMouseMove={onMouseMoveTwo} className='innerDiv'></div>
                </div>
            </div>
            <div>
                {youFailedFinal}
                <button onClick={onClick} className='tryAgain'>Try Again</button>
            </div>
        </div>
        )
    }
    return (
        <>
            {wholePage}
        </>
    )
}

export default DiagonAlley