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
    
  }
  if (items) {
    mappedItems = (
      <>
        <p>House: {items.house}</p>
        <p>Diagon Alley: {diagony}</p>
        <p>Wand: {wandy}</p>
        <p>Pet: {pety}</p>
      </>
    )
  } else {
    mappedItems = (
      <p>Loading...</p>
    )
  }
  return (
    <div className="App">
      <h1>Trolley Level 1</h1>
      {mappedItems}
    </div>
  )
} 
