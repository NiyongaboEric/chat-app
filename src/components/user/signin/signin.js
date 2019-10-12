import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import './signin.css';
import '../signup/signup.css';
import { signinApi } from '../../../Redux/actions/signin';
import SigninError from '../../errors/signin';

class Signin extends Component  {
  
  onhandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const credentials = {
      email: email.value, 
      password: password.value 
    };
    this.props.onSigninClick(credentials);
  }

  render() {
    const { email, password, message } = this.props.signin;
    const token = localStorage.getItem('token');
    return (
      <React.Fragment>
        { token && <Redirect to="dashboard" /> }
          <div className="signup-container">
            <h1 className="logo">
              <Link
                to="/dashboard"
                className="signin-logo"
              />
            </h1>
            <div className="panel" id="login">
              <h3>Log in to your account</h3>

              <form onSubmit={this.onhandleSubmit}>
              { message && <SigninError error={message}/> }
                <div className="form-input signin-email">
                  <input
                    type="email"
                    name="email"
                    placeholder={email}
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
      </React.Fragment>
    );
  }
  mapStateToProps = (state) => {
    return {
      signin: state.signin
    };
  }
  
  mapDispatchToProps = (dispatch) => {
    return {
      onSigninClick: (data) => {
        return dispatch(signinApi(data)) 
      }
    };
  }
};


const signin = new Signin();
export default connect(signin.mapStateToProps, signin.mapDispatchToProps)(Signin);
