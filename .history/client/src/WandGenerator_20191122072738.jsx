import React, { useState, useEffect } from 'react'
import axios from 'axios'

function WandGenerator (props) {

    const [character, setCharacters] = useState([])
    const [singleChar, setSingleChar] = useState('')
    const [personPicked, setpersonPicked] = useState(false)

    useEffect(() => {
        axios.get('/api/wands').then(response => {
            setCharacters(response.data)
        }) 
    }, [])

    function handleClick (event, wand) {
        setSingleChar(wand)
        setpersonPicked(true)
    }

    var hogwartsCharacters;
    if (personPicked) {
        if (typeof singleChar !== 'undefined') {
            axios.post('/auth/edit/wand', {wand: 'Elder, 15", Thestral tail hair core', id: props.user._id}).then(response => {
            })
            hogwartsCharacters = 'Your wand is: ' + singleChar
        } else {
            hogwartsCharacters = 'Your wand is: Elder, 15", Thestral tail hair core'
        }
    } else {
        hogwartsCharacters = character.map((ele, id) => <button key={id} onClick={(event) => handleClick(event, ele.wand)}>{ele.name}</button>)
    }
    return (
        <div className='wandGeneratorBackground'>
            <div className='wandGeneratorContainer'>
                <h1>Welcome to Ollivanders!</h1>
                <h3>The way to start your magical journey with a wand is to name your favorite harry potter character!</h3>
                {hogwartsCharacters}
            </div>
        </div>
    )
}

export default WandGenerator