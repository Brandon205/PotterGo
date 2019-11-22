import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import map from './img/MapboxMap.png';
import tree from './img/Tree.jpg';
import gum from './img/GumWall.jpg';
import store from './img/Bookstore.jpg';
import station from './img/station.jpg';
import pub from './img/pub.jpg';

export default function Homepage(props) {

  const [redirect, setRedirect] = useState('')
  const [dogCount, setDogCount] = useState(0)

  return (
    <div className="black-back">
      <header>
        <h1>Level 1</h1>
      </header>
      <div className="image">
        <img src={tree} alt="tree" className="absoluteTree" onClick={ () => setRedirect(<Redirect to="/wand" />)} />
        <img src={gum} alt="gum wall" className="absoluteGum" onClick={ () => setRedirect(<Redirect to="/houses" />)} />
        <img src={store} alt="bookstore" className="absoluteBook" onClick={ () => setRedirect(<Redirect to="/bookstore" />)} />
        <img src={station} alt="station" className="absoluteStation" onClick={ () => setRedirect(<Redirect to="/station" />)} />
        <img src={pub} alt="pub" className="absolutePub" onClick={ () => setRedirect(<Redirect to="/pub" />)} />
        <button className="dog-counter" onClick={ () => setDogCount(dogCount + 1)}>{dogCount}</button>
        <img src={map} className="relative" alt="map"/>
      </div>
      {redirect}
    </div>
  )
}
