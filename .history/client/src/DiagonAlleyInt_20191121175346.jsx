import React, { useState} from 'react'

function DiagonAlleyInt() {

    const [currPassword, setCurrPassword] = useState()


    return (
        <div>
            <h1>Welcome to Diagon Alley</h1>
            <img src="./img/GumWall.jpg" alt="" className='bubbleWallImage'/>
        </div>
    )
}

export default DiagonAlleyInt