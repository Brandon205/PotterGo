import React from 'react';
import Signup from './Signup';

export default function LoginPage(props) {
  let content;
  if (props.token) {
    content = (
      <div className="App">
        <h1>Profile</h1>
        <button onClick={props.logout}>Logout</button>
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
    <div className="App">
      {content}
    </div>
  )
}
