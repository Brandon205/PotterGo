import React from 'react';
import station from './img/station.jpg';

function Station (props) {
    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <h1>HOGWARTS EXPRESS</h1>
            <h2>425 15th Ave E, Seattle, WA 98112 </h2>
            <h3>Get yer books an schedule!</h3>
            <img src={station} alt="" className='bubbleWallImage'/>
        </div>
    )
}

export default Station