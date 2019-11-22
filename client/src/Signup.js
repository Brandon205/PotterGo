import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import Login from './Login';

class Signup extends React.Component {
  state = { 
    name: '',
    email: '',
    password: '',
    message: '', 
    house: '',
    redirect: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('/auth/signup', {name: this.state.name, email: this.state.email, password: this.state.password, house: this.state.house})
    .then(res => {
      if (res.data.type === 'error') {
        // TODO: Maybe put this message in state
        console.log(`Error: ${res.data.message}`);
      } else {
        localStorage.setItem('mernToken', res.data.token)
        this.props.liftToken(res.data)
      }
    }).catch(err => console.log(err));
    this.setState({ redirect: <Redirect to="/map" /> });
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
        <h1>Sign in</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="text-input" type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name" /><br/>
          <input className="text-input" type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" /><br/>
          <input className="text-input" type="text" name="house" onChange={this.handleChange} value={this.state.house} placeholder="Gryffindor" /><br/>
          <input className="text-input" type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" /><br/>
          <button className="submit">Let's go</button>
        </form>
        <Login liftToken={this.props.liftToken}/>
        {redirect}
      </div>
    );
  }
}

export default Signup;
