import React, { Component } from 'react';
import PersonCredentials from './PersonCredentials';
import PersonInformation from './PersonInformation';


class UserSignup extends Component {
  state = {
    currentState: 1,
    users: [
      {
        fullnames: '',
        email: '',
        password: '',
        username: '',
        telephone: '',
        image: null,
      }
    ]
  }

  handleChange = (e) => {
    const users = [...this.state.users];
    const { value, name } = e.target
    users[0][name] = value
    this.setState({ users: users });
  }

  fileSelectedHandler = (e) => {
    let { image } = { ...this.state.users[0] };
    image = e.target.files[0];
    const users = { ...this.state.users[0], ...{ image } }
    this.setState({ users: [users] });
  }

  prevStep = (e) => {
    let { currentState } = { ...this.state }
    currentState--;
    this.setState({ currentState })
  }

  nextStep = (e) => {
    let { currentState } = { ...this.state }
    currentState++;
    this.setState({ currentState })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    console.log('current', this.state);
    const {
      fullnames,
      email,
      password,
      username,
      telephone } = this.state.users[0];
    const values = { fullnames, email, password, username, telephone };

    return (
      <React.Fragment>
        {
          this.state.currentState === 1 ?
            <PersonCredentials
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              values={values}
            /> :
            <PersonInformation
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              fileSelectedHandler={this.fileSelectedHandler}
              values={values}
            />
        }
      </React.Fragment>
    );
  }
}
export default UserSignup;
