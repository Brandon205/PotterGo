import React from 'react';
import bookstore from './img/Bookstore.jpg';

function Bookstore (props) {
    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <h1>FLOURISH AND BLOTTS</h1>
            <h4>425 15th Ave E, Seattle, WA 98112 </h4>
            <h4>Get yer books an schedule!</h4>
            <img src={bookstore} alt="" className='bubbleWallImage'/>
        </div>
    )
}

export default Bookstore