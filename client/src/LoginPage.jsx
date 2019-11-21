import React from 'react';
import Signup from './Signup';
import Login from './Login';

function LoginPage(props) {
  return (
    <>
      <Signup liftToken={props.liftToken} />
      <Login liftToken={props.liftToken} />
    </>
  )
}
export default LoginPage