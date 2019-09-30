import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserSignup from '../Components/User/Signup/Signup.js';
import Signin from '../Components/User/Signin/Signin.js';
import '../index.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

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
