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
  if (items)
  mappedItems = mappableItems.map((item, id) => <div><input type="checkbox" checked={item.checked} />{}</div> )
  } else {
    mappedItems = <p>Loading...</p>
  }
  return (
    <div className="App">
      <h1>Trolley Level 1</h1>
      {mappedItems}
    </div>
  )
} 
