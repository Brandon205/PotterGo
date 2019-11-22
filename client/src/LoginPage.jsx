import React from 'react';
import Signup from './Signup';
import Login from './Login';

export default function LoginPage(props) {
  let content;
  if (props.token) {
    content = (
      <div className="App">
        <h2>Hello!</h2>
        <button onClick={props.logout}>Logout</button>
      </div>
    )
  } else {
    content = (
      <div className="App">
        <Signup liftToken={props.liftToken} />
        <Login liftToken={props.liftToken} />
      </div>
    )
  }

  return (
    <div className="App">
      {content}
    </div>
  )
}
