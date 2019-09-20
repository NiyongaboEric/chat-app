import React, { Component } from 'react';
import PersonCredentials from './PersonCredentials';
import PersonInformation from './PersonInformation';

import { validateSignup } from '../../../Validation/Validate';



class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
      error: '',
    }
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

  nextStep = async (e) => {
    let {
      currentState,
      users } = await { ...this.state };
    const isError = await validateSignup(users[0]);
    await this.setState({ error: isError });

    const noError = ['fullnames', 'email', 'password'];
    const currentError = Object.keys(this.state.error)[0];
    if (!noError.includes(currentError)) {
      currentState++;
      await this.setState({ currentState });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { users, error } = { ...this.state };
    const isError = validateSignup(users[0]);
    this.setState({ error: isError });

    if (!Object.keys(error)[0]) {
      console.log('handleSubmit', isError, error);
    }
  }

  render() {
    console.log('current', this.state);
    const {
      fullnames,
      email,
      password,
      username,
      telephone } = this.state.users[0];
    const { error } = this.state;
    const values = { fullnames, email, password, username, telephone };
    return (
      <React.Fragment>
        {
          this.state.currentState === 1
            ? <PersonCredentials
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              values={values}
              error={error}
            />

            : <PersonInformation
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              fileSelectedHandler={this.fileSelectedHandler}
              values={values}
              error={error}
            />
        }
      </React.Fragment>
    );
  }
}
export default UserSignup;
