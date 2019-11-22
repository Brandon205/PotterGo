import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import map from './img/MapboxMap.png';
import tree from './img/Tree.jpg';
import gum from './img/GumWall.jpg';
import axios from 'axios';

export default function Homepage(props) {

  const [redirect, setRedirect] = useState('')
  const [dogCount, setDogCount] = useState(0)

  useEffect((props) => {
    console.log(props.user)
    axios.post('/auth/edit/initial', {id: props.user._id}).then(response => {
      console.log(response)
    })
  }, [])

  return (
    <div>
      <header>
        <h1>Level 1</h1>
      </header>
      <div className="image">
        <img src={tree} alt="tree" className="absoluteTree" onClick={ () => setRedirect(<Redirect to="/wand" />)} />
        <img src={gum} alt="gum wall" className="absoluteGum" onClick={ () => setRedirect(<Redirect to="/houses" />)} />
        <button className="dog-counter" onClick={ () => setDogCount(dogCount + 1)}>{dogCount}</button>
        <img src={map} className="relative" alt="map"/>
      </div>
      {redirect}
    </div>
  )
}
