import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Trolley(props) {

  const [items, setItems] = useState({})

  useEffect( () => {
    axios.get(`/api/userInfo?id=${props.user._id}`)
    .then(res => {
      console.log(res.data)
      setItems(res.data)}
      )
  }, [])


  var mappedItems;
  var wandy;
  var pety;
  var diagony;
  if (items.wand !== 'a') {
    wandy = <p>{items.wand}</p>
  } else if (items.diagon !== 'a') {
    diagony = <p>{items.diagon}</p>
  } else if (items.diagon !== 'a') {
    pety = <p>{items.pet}</p>
  } else {
    wandy = 'Still need to get this!'
    diagony = 'Still need to do this!'
    pety = 'Still need to get this!'
  }
  if (items) {
    mappedItems = (
      <>
        <h2>{items.house}</h2>
        <div className="trolley-container">
          <div className="trolley">
            <h4><span>Diagon Alley: </span>{diagony}</h4>
            <h4><span>Wand: </span>{wandy}</h4>
            <h4><span>Pet: </span>{pety}</h4>
          </div>
        </div>
      </>
    )
  } else {
    mappedItems = (
      <p>Loading...</p>
    )
  }
  return (
    <div className="black-back">
      <h1>Trolley Level 1</h1>
      {mappedItems}
    </div>
  )
} 
