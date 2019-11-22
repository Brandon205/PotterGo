import React, { useState} from 'react'

function DiagonAlleyInt() {

    const [currPassword, setCurrPassword] = useState('')



    return (
        <div>
            <h1>Welcome to Diagon Alley</h1>
            <img src="./img/GumWall.jpg" alt="" className='bubbleWallImage'/>
            <h3>Please navigate through to the next page when you dare!</h3>
            <p>The following page will allow you entry to diagon alley only if you can \n trace the correct shape on the bricks!</p>
        </div>
    )
}

export default DiagonAlleyInt