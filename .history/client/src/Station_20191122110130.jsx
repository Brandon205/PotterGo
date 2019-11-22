import React from 'react';
import station from './img/station.jpg';

function Station (props) {
    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <h1>HOGWARTS EXPRESS</h1>
            <img src={station} alt="" className='bubbleWallImage'/>
        </div>
    )
}

export default Station