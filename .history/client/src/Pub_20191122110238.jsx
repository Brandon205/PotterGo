import React from 'react';
import pub from './img/pub.jpg';

function Pub (props) {
    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <h1>THE LEAKY CAULDRON</h1>
            <h2>1650 E Olive Way, Seattle, WA 98102 </h2>
            <h3>Enjoy yerself a butterbeer!</h3>
            <img src={pub} alt="" className='bubbleWallImage'/>
        </div>
    )
}

export default Pub