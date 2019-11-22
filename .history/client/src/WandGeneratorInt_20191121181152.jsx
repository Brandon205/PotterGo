import React, { useState} from 'react';
import { Link } from 'react-router-dom';

function DiagonAlleyInt() {

    const [currPassword, setCurrPassword] = useState('')

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    var isTrue = false;
    var conditionalizeThatShit;
    if (isTrue) {
        conditionalizeThatShit = (
            <div>
                <p>The following requires entry to Diagon Alley... Please enter your proof!</p>
                <form action="get">
                    <input type="text"/>
                </form>
                <Link to='diagonalley'>Continue</Link>
            </div>    
        )
    } else {
        conditionalizeThatShit = (
            <div>

            </div>
        )    
    }

    return (
        <div className='DiagonAlleyIntContainer'>
            <h1>Welcome to Ollivanders!</h1>
            <img src={gum} alt="" className='bubbleWallImage'/>
            <h3>Please navigate through to the next page when you dare!</h3>
            
        </div>
    )
}

export default DiagonAlleyInt