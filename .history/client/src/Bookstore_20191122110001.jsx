import React from 'react';
import bookstore from './img/Bookstore.jpg';

function Bookstore (props) {
    return (
        <div className='DiagonAlleyIntContainer black-back'>
            <img src={bookstore} alt="" className='bubbleWallImage'/>
        </div>
    )
}

export default Bookstore