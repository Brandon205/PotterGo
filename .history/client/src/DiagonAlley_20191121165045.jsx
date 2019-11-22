import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

function DiagonAlley () {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)
    const [breaking, setBreaking] = useState(false)
    const [youFaileda, setyouFaileda] = useState('')
    const [count, setCount] = useState(0);

    var counter = count;
    function onMouseMove (event)  {
        setX(event.screenX)
        setY(event.screenY)
        counter+=1
        setCount(counter)
        console.log(counter)
    }

    function onMouseMoveTwo (event)  {
        setBreaking(true)
        setyouFaileda('The wall stays solid! Please try again!')
        setCount(0)
        console.log('You have failed')
    }
    
    function onMouseDown(event) {
        setCount(5)
        console.log(count)
        console.log('mouse down')
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
    if (count > 900) {
        wholePage = (
            <div className='container'>
                <h1>'YOU WIN, COME ON IN AND FIND A WAND'</h1>
                <button onClick={(<Redirect to='/map' />)}>Go to Checklist to see Achieved Goals and Next Challenge!</button>
            </div>
        )
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