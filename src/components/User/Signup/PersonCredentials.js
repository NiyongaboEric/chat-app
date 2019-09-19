import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.jpg';
import './Signup.css';
import Advertise from '../Advertise/Advert';


class PersonCredentials extends Component {

  render() {
    const { handleChange, nextStep, values } = this.props;

    return (
      <div className="signup">
        <Advertise />
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
                <input
                  type="text"
                  name="fullnames"
                  value={values.fullnames}
                  onChange={handleChange}
                  placeholder="&#xf007; Shamim Kelai"
                />
              </div>
              <div className="input-error">err</div>
              <div className="form-input">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="&#xf0e0; shamim@kelai.ex"
                />
              </div>
              <div className="form-input">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="&#xf023; *****"
                />
              </div>
              <div className="form-input">
                <button
                  onClick={nextStep}
                  type="button"
                >
                  Save and Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
}

export default PersonCredentials;