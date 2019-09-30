import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import UserSignup from './components/User/Signup/Signup.js';
import Signin from './components/User/Signin/Signin.js';


const Routers = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/signup" exact component={UserSignup} />
          <Route path="/signin" exact component={Signin} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;
