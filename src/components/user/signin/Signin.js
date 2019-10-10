import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './signin.css';
import '../signup/signup.css';


const onHandleChange = (e) => {
  console.log('email ', e.target.name);
  console.log('pasword ', e.target.name);
}

const handleSubmit = (e) => {
  e.preventDefault();
  // const temp = dispatch({ type: "SOMETHING" })
  console.log('on submit', e.dispatch);
}

const Signin = (props) => {
  const { email, password } = props.signin;
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
        <form onSubmit={handleSubmit}>
          <div className="form-input signin-email">
            <input
              type="email"
              name="email"
              placeholder={email}
              onChange={onHandleChange}
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
              placeholder={password}
              onChange={onHandleChange}
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

const mapStateToProps = (state) => {
  return {
    signin: state.signin
  };
}

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch dispatch ", dispatch);
  
  return {
    "dispatch": "dispatch",
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);