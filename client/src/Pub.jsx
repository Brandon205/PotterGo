import React from 'react';
import pub from './img/pub.jpg';

function Pub (props) {
    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <h1>THE LEAKY CAULDRON</h1>
            <h4>1650 E Olive Way, Seattle, WA 98102 </h4>
            <h4>Enjoy yerself a butterbeer!</h4>
            <img src={pub} alt="pub" className='bubbleWallImage'/>
        </div>
    )
}

export default Pub