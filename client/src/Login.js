import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = { 
    email: '',
    password: '',
    message: '',
    redirect: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/auth/login', {email: this.state.email, password: this.state.password})
    .then(res => {
      if (res.data.type === 'error') {
        console.log(`Error: ${res.data.message}`);
      } else {
        localStorage.setItem('mernToken', res.data.token);
        this.props.liftToken(res.data);
        console.log(this.state.email)
          Axios.post('/auth/edit/initial', {email: this.state.email}).then(response => {
            console.log(response)
          })
      }
    }).catch(err => console.log(err)); // Rate limiter catch block
    this.setState({ redirect: <Redirect to="/map" /> })
  }

  render() { 
    let redirect;
    if (this.state.redirect) {
      redirect = this.state.redirect
    } else {
      redirect = ''
    }

    return ( 
      <div className="black-back">
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="text-input" type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" /><br />
          <input className="text-input" type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" /><br />
          <button className="submit">Let's go</button>
        </form>
        {redirect}
      </div>
    );
  }
}

export default Login;
