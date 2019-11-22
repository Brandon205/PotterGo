import React from 'react';
import bookstore from './img/Bookstore.jpg';

function Bookstore (props) {
    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <h1>FLOURISH AND BLOTTS</h1>
            <h3>425 15th Ave E, Seattle, WA 98112
Get yer books an schedule!</h3>
            <img src={bookstore} alt="" className='bubbleWallImage'/>
        </div>
    )
}

export default Bookstore