import React from 'react';
import Signup from './Signup';
import Login from './Login';

export default function LoginPage(props) {
  return (
    <>
      <Signup liftToken={props.liftToken} />
      <Login liftToken={props.liftToken} />
    </>
  )
}
