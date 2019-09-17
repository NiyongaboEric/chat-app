import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.jpg';
import './signup.css';


class UserSignup extends Component {

  render() {
    return (
      <div className="signup">
        <div className="signup-message">
        </div>
        <div className="signup-content">
          <div className="logo">
            <img src={logo} alt="Free Online Logo Maker by DesignEvo free logo creator" />
          </div>
          <div className="signup-details">
            <h2 className="motto">Talk to everyone without borders</h2>
            <span className="signin-link">Already signed up?
              <Link to="/signin"> Login</Link>
            </span>
          </div>
          <div className="signup-form">
            <form>
              <div className="form-input">
                <label>Full names</label>
                <input type="text" placeholder="&#xf007; Shamim Kelai"></input>
              </div>
              <div className="form-input">
                <label>Email</label>
                <input type="email" placeholder="&#xf0e0; shamim@kelai.ex"></input>
              </div>
              <div className="form-input">
                <label>Password</label>
                <input type="password" placeholder="&#xf023; *****"></input>
              </div>
              <div className="form-input">
                <button type="submit">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
}

export default UserSignup;