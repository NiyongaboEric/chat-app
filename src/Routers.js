import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserSignup from './components/User/Signup/signup';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function Routers() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/signup" exact component={UserSignup} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;
