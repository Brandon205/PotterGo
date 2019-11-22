import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import gum from './img/GumWall.jpg';

function DiagonAlleyInt() {

    const [currPassword, setCurrPassword] = useState('')



    return (
        <div className='DiagonAlleyIntContainer'>
            <h1>Welcome to Diagon Alley</h1>
            <img src={gum} alt="" className='bubbleWallImage'/>
            <h3>Please navigate through to the next page when you dare!</h3>
            <p>The following page will allow you entry to diagon alley only if you can trace the correct shape on the bricks!</p>
            <Link to='/diagonalley' className='submit'>Continue</Link>
        </div>
    )
}

export default DiagonAlleyInt