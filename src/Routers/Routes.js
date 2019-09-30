import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from '../Components/User/Signup/Signup.js';
import Signin from '../Components/User/Signin/Signin.js';
import '../index.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

function Routers() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;
