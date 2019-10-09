import React from 'react';
import { Link } from "react-router-dom";
import './signin.css';
import '../signup/signup.css';

const Signin = () => {
  
  return (
    <div className="signup-container">
      <h1 className="logo">
        <Link
          to="/dashboard"
          className="signin-logo"
        />
      </h1>
      <div className="panel" id="login">
        <h3>Log in to your account</h3>
        <form>
          <div className="form-input signin-email">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />
            <label
              className="fa fa-user input-email-icon"
            />
          </div>
          <div className="form-input signin-password">
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <label
              className="fa fa-lock input-password-icon"
            />
          </div>
          <div className="form-confirm-btn">
            <button
              className="form-next-btn"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <Link to="/signup" className="panel-footer">
          New to Vuga?&nbsp;<span>Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default Signin;