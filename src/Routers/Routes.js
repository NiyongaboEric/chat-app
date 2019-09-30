import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../index.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
const UserSignup = require('../Components/User/Signup/Signup');
const UserSignin = require('../Components/User/Signin/Signin');

const Routers = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/signup" exact component={UserSignup} />
          <Route path="/signin" exact component={UserSignin} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;
