import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';
import Advertise from '../Advertise/Advert';

class PersonInformation extends Component {

  render() {
    const { handleChange, prevStep, values, fileSelectedHandler, handleSubmit, error } = this.props;
    return (
      <div className="signup">
        <Advertise />
        <div className="signup-content">
          <div className="signup-confirm-title">
            <p> Congratulation <strong>{values.fullnames ? values.fullnames : 'User'}</strong>, This is final step <FontAwesomeIcon icon={faCheck} style={{ color: "#2ed06e" }} /> </p>
          </div>
          <div className="signup-confirm-message">
            <p>Before we finish, we want you to be unique and help friends to identify you easily.</p>
          </div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="form-input">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  placeholder="&#xf2c1; @yourUniqueName" />
              </div>
              {error.username && <div className="input-error">{error.username}</div>}
              <div className="form-input">
                <label>Telephone</label>
                <input
                  type="number"
                  name="telephone"
                  value={values.telephone}
                  min="0"
                  onChange={handleChange}
                  placeholder="&#xf095; 2507----" />
              </div>
              {error.telephone && <div className="input-error">{error.telephone}</div>}
              {error.image && <div className="input-error">{error.image}</div>}
              <div className="form-input">
                <label>Profile Picture</label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={fileSelectedHandler}
                />
              </div>
              <div className="form-confirm-btn">
                <button
                  className="form-back-btn"
                  type="button"
                  onClick={prevStep}
                >
                  Go back
                </button>
                <button
                  className="form-next-btn"
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
}

export default PersonInformation;