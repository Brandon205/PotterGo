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
                <h4>The following requires entry to Diagon Alley... Please enter your proof!</h4>
                <form onSubmit={handleSubmit}>
                    <input className="text-input" type="text" name='password' value={currPassword} onChange={handleChange}/><br />
                    <input type="submit" value="Submit" className='submit'/>
                </form>
            </div>    
        )
    } else {
        conditionalizeThatShit = (
            <div>
                <h4>Congratulations! You may now go and get a wand from ollivanders.</h4>
                <h4> The instructions are simple: you must select your favorite character from the books and you will be rewarded with your wand of choice</h4>
                <Link className="submit" to='/ollivanders'>Continue</Link>
            </div>
        )    
    }

    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <h1>You are about to enter Ollivanders!</h1>
            <img src={tree} alt="" className='bubbleWallImage'/>
            <h3>Please navigate through to the next page when you dare!</h3>
            {conditionalizeThatShit}
        </div>
    )
}

export default DiagonAlleyInt