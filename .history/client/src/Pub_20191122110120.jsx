import React from 'react';
import pub from './img/pub.jpg';

function Pub (props) {
    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <h1>THE LEAKY CAULDRON</h1>
            <img src={pub} alt="" className='bubbleWallImage'/>
        </div>
    )
}

export default Pub