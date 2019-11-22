import React, { useState, useEffect } from 'react'
import axios from 'axios'

function WandGenerator (props) {

    const [character, setCharacters] = useState([])
    const [gryffindor, setGryffindor] = useState([])
    const [slytherin, setSlytherin] = useState([])
    const [ravenclaw, setRavenclaw] = useState([])
    const [hufflepuff, setHufflepuff] = useState([])
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
    var gryffindors = []
    var slytherins = []
    var ravenclaws = []
    var hufflepuffs = []
    var gryfCharacters;
    var slythCharacters;
    var ravCharacters;
    var huffCharacters;
    if (personPicked) {
        if (typeof singleChar !== 'undefined') {
            console.log(props.user._id)
            axios.post('/auth/edit/wand', {wand: 'Elder, 15", Thestral tail hair core', id: props.user._id}).then(response => {
            })
            hogwartsCharacters = 'Your wand is: ' + singleChar
        } else {
            axios.post('/auth/edit/wand', {wand: 'Elder, 15", Thestral tail hair core', id: props.user._id}).then(response => {
            })
            hogwartsCharacters = 'Your wand is: Elder, 15", Thestral tail hair core'
        }
    } else {
        console.log(character)
        character.forEach(person => {
            if (person.house === 'Hufflepuff') {
                hufflepuffs.push(person)
            } else if (person.house === 'Gryffindor') {
                gryffindors.push(person)
            } else if (person.house === 'Slytherin') {
                slytherins.push(person)
            } else if (person.house === 'Ravenclaw') {
                ravenclaws.push(person)
            }
        })
        gryfCharacters = gryffindors.map((ele, id) => <button key={id} onClick={(event) => handleClick(event, ele.wand)}>{ele.name}</button>)
        slythCharacters = slytherins.map((ele, id) => <button key={id} onClick={(event) => handleClick(event, ele.wand)}>{ele.name}</button>)
        ravCharacters = ravenclaws.map((ele, id) => <button key={id} onClick={(event) => handleClick(event, ele.wand)}>{ele.name}</button>)
        huffCharacters = hufflepuffs.map((ele, id) => <button key={id} onClick={(event) => handleClick(event, ele.wand)}>{ele.name}</button>)
        
        
        hogwartsCharacters = (
            <div>
                <h3>Gryffindors</h3>
                {gryfCharacters}
                <h3>Slytherin</h3>
                {slythCharacters}
                <h3>Ravenclaw</h3>
                {ravCharacters}
                <h3>Hufflepuff</h3>
                {huffCharacters}
            </div>
        )
    }
    return (
        <div className='wandGeneratorBackground'>
            <div className='wandGeneratorContainer'>
                <h1>Pick yer wand out at Ollivanders!</h1>
                    <h2>2010 Western Ave, Seattle, WA 98121</h2>

                <h3>The way to start your magical journey with a wand is to name your favorite harry potter character!</h3>
                {hogwartsCharacters}
            </div>
        </div>
    )
}

export default WandGenerator