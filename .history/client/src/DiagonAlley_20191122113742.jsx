import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function DiagonAlley (props) {
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
        youFailedFinal = <h1>{youFailed}</h1>
    } else {
        youFailed = 'click to begin'
        youFailedFinal = <h1>{youFailed}</h1>
    } 
    var wholePage;
    var myText = <div><p className='backToChecklist'>Go Back To Checklist!</p></div>
    if (count > 900) {
        axios.post('/auth/edit/diagon', {diagon: 'true', id: props.user._id}).then(response => {
        })
        wholePage = (
            <div className='containerTwo'>
                <h1 className='titleDiagon'>YOU WIN, COME ON IN AND FIND A WAND</h1>
                <h3 className='titleDiagon'>The Password is: Muggles</h3>
                <Link to='/map'>{myText}</Link>
            </div>
        )
    } else {
        wholePage = (
        <div className='backgroundDiv'>
            <div>
                <h1>Welcome to Diagona Alley</h1>
                <h2>t1428 Post Alley, Seattle, WA 98101 </h2>
                <h2>Start yer journey by unlocking Diagon Alley!</h2>
                <h3>Trace the shape on the bricks to unlock Diagon Alley and get yer school supplies!</h3>
            </div>
            <div className='container'>
                <div onMouseMove={onMouseMove} onMouseDown={onMouseDown} className='diagonDiv'>
                <div onMouseMove={onMouseMoveTwo} className='innerDiv'></div>
                </div>
            </div>
            <div>
                {youFailedFinal}
                <button onClick={onClick} className='tryAgain'>Restart</button>
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