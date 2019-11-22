import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import tree from './img/Tree.jpg';

function DiagonAlleyInt() {

    const [currPassword, setCurrPassword] = useState('')
    const [isTrue, setIsTrue] = useState('')

    function handleChange (event) {
        setCurrPassword(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        if (currPassword === 'Muggles') {
            setIsTrue('theywin')    
        }
    }

    var conditionalizeThatShit;
    if (isTrue !== 'theywin') {
        conditionalizeThatShit = (
            <div>
                <p>The following requires entry to Diagon Alley... Please enter your proof!</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='password' value={currPassword} onChange={handleChange}/><br />
                    <input type="submit" value="Submit" className='submit'/>
                </form>
            </div>    
        )
    } else {
        conditionalizeThatShit = (
            <div>
                <h3>Congradulations! You may now go and get a wand from ollivanders. The instructions are simple: you must select your favorite character from the books and you will be rewarded with your wand of choice</h3>
                <Link to='/ollivanders'>Continue</Link>
            </div>
        )    
    }

    return (
        <div className='DiagonAlleyIntContainer'>
            <h1>Welcome to Ollivanders!</h1>
            <img src={tree} alt="" className='bubbleWallImage'/>
            <h3>Please navigate through to the next page when you dare!</h3>
            {conditionalizeThatShit}
        </div>
    )
}

export default DiagonAlleyInt