import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import map from './img/Map.png';
import tree from './img/Tree.jpg';
import gum from './img/GumWall.jpg';

export default function Homepage(props) {

  const [redirect, setRedirect] = useState('')
  const [dogCount, setDogCount] = useState(0)

  
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
