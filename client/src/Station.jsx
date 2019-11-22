import React from 'react';
import station from './img/station.jpg';

function Station (props) {
    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <h1>HOGWARTS EXPRESS</h1>
            <h4>140 Broadway E, Seattle, WA 98102 </h4>
            <h4>Don’t miss yer train to Hogwarts!</h4>
            <img src={station} alt="" className='bubbleWallImage'/>
        </div>
    )
}

export default Station