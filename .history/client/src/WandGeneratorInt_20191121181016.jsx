import React, { useState} from 'react';
import { Link } from 'react-router-dom';

function DiagonAlleyInt() {

    const [currPassword, setCurrPassword] = useState('')

    var isTrue = false;
    var conditionalizeThatShit;
    if (isTrue) {
        conditionalizeThatShit = (
            <div>
                <p>The </p>
                <Link to='diagonalley'>Continue</Link>
            </div>    
        )
    } else {
        conditionalizeThatShit = (
            <div>
                
            </div>
    }

    return (
        <div className='DiagonAlleyIntContainer'>
            <h1>Welcome to Ollivanders!</h1>
            <img src={gum} alt="" className='bubbleWallImage'/>
            <h3>Please navigate through to the next page when you dare!</h3>
            
        </div>
    )
}

export default DiagonAlleyInt