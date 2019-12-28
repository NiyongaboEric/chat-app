import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import './signin.css';
import '../signup/signup.css';
import { signinApi } from '../../../Redux/actions/signin';
import SigninError from '../../errors/signin';

export class Signin extends Component  {
  state = {
    email: '',
    password: ''
  }

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onhandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    
    const credentials = {
      email, 
      password 
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

              <form onSubmit={this.onhandleSubmit} id="login_form">
              { message && <SigninError error={message}/> }
                <div className="form-input signin-email">
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onHandleChange}
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
                    value={this.state.password}
                    onChange={this.onHandleChange}
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
