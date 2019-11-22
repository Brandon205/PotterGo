import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Z_FIXED } from 'zlib'

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
            axios.post('/auth/edit/wand', {wand: 'Elder, 15", Thestral tail hair core', id: props.user._id}).then(response => {
            })
            hogwartsCharacters = ( <div className="black-back"><h4 id="wand-fixed">Your wand is: {singleChar}</h4></div> )
        } else {
            axios.post('/auth/edit/wand', {wand: 'Elder, 15", Thestral tail hair core', id: props.user._id}).then(response => {
            })
            hogwartsCharacters = ( <div className="black-back"><h4 id="wand-fixed">Your wand is: Elder, 15", Thestral tail hair core</h4></div>)
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
        gryfCharacters = gryffindors.map((ele, id) => <button className="submit-houses" key={id} onClick={(event) => handleClick(event, ele.wand)}> {ele.name}{' '} </button>)
        slythCharacters = slytherins.map((ele, id) => <button className="submit-houses" key={id} onClick={(event) => handleClick(event, ele.wand)}> {ele.name} </button>)
        ravCharacters = ravenclaws.map((ele, id) => <button className="submit-houses" key={id} onClick={(event) => handleClick(event, ele.wand)}> {ele.name} </button>)
        huffCharacters = hufflepuffs.map((ele, id) => <button className="submit-houses" key={id} onClick={(event) => handleClick(event, ele.wand)}> {ele.name} </button>)
        
        
        hogwartsCharacters = (
            <div className="wandGeneratorBackground">
                <h3>Gryffindors</h3>
                {gryfCharacters}
                <h3>Slytherins</h3>
                {slythCharacters}
                <h3>Ravenclaws</h3>
                {ravCharacters}
                <h3>Hufflepuffs</h3>
                {huffCharacters}
            </div>
        )
    }
    return (
        <div className='wandGeneratorBackground'>
            <h1>Pick yer wand out at Ollivanders!</h1>
            <h4>2010 Western Ave, Seattle, WA 98121</h4>
            <h4>The way to start your magical journey with a wand is to name your favorite harry potter character!</h4>
            {hogwartsCharacters}
        </div>
    )
}

export default WandGenerator