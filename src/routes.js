import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import UserSignup from './components/user/signup/signup.js';
import Signin from './components/user/signin/signin.js';
import store from './Redux/store/store';
import Dashboard from './components/dashboard/main.page';
import Signout from './components/user/signout/signout';


const Routers = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/signup" exact component={UserSignup} />
            <Route path="/signin" exact component={Signin} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/signout" exact component={Signout} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default Routers;
