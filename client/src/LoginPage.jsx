import React from 'react';
import Signup from './Signup';

export default function LoginPage(props) {
  let content;
  if (props.token) {
    content = (
      <div className="App">
        <h1>Profile</h1>
        <button className="submit" onClick={props.logout}>Logout</button>
      </div>
    )
  } else {
    content = (
      <div className="App">
        <Signup liftToken={props.liftToken} />
      </div>
    )
  }

  return (
    <div className="black-back">
      {content}
    </div>
  )
}
