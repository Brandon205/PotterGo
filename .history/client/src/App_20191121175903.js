import React from 'react';
import './App.css';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import DiagonAlley from './DiagonAlley';
import Homepage from './Homepage';
import LoginPage from './LoginPage';
import WandGenerator from './WandGenerator';
import DiagonAlleyInt from './DiagonAlleyInt'

class App extends React.Component {
  state = { 
    token: '',
    user: null,
    errorMessage: '',
    lockedResult: '',
    redirect: ''
  }

  checkForLocalToken = () => {
    // Look in LS for localtoken
    let token = localStorage.getItem('mernToken');
    if (!token || token === 'undefined') {
      // if no taken, remove all evidence of mernToken from LS and state
      localStorage.removeItem('mernToken');
      this.setState({ token: '', user: null });
    } else {
      // if token, verify token on backend 
      Axios.post('/auth/me/from/token', { token })
      .then(res => {
        if (res.data.type === 'error') {
          localStorage.removeItem('mernToken');
          this.setState({ token: '', user: null, errorMessage: res.data.message });
        } else {
          // if verified store it back in LS and state
          localStorage.setItem('mernToken', res.data.token);
          this.setState({ token: res.data.token, user: res.data.user });
        }
      })
    }
  }

  componentDidMount = () => {
    this.checkForLocalToken()
  }

  liftToken = ({token, user}) => {
    this.setState({ token, user });
  }

  logout = () => {
    localStorage.removeItem('mernToken');
    this.setState({ token: '', user: null });
  }

  render() { 
    return ( 
      <Router>
        <div className="App">
          <Route exact path='/' render={ () => <LoginPage liftToken={this.liftToken}/>}/>
          <Route exact path='/map' component={Homepage}/>
          <Route exact path='/houses' component={DiagonAlley}/>
          <Route exact path='/houses' component={DiagonAlley}/>
          <Route exact path='/wand' component={WandGenerator}/>
          <nav>
            <Link className="link" to="/map"><i className="material-icons">home</i></Link>
            <Link className="link" to="/trolley"><i className="material-icons secondary-content">arrow_forward</i></Link>
            <Link className="link" to="/trolley"><i className="material-icons secondary-content">arrow_forward</i></Link>
          </nav>
        </div>
      </Router>  
    );
  }
}

export default App;
