import React, { Component } from 'react';
import { Redirect } from "react-router";
import PersonCredentials from './PersonCredentials';
import PersonInformation from './PersonInformation';

import { validateSignup } from '../../../Validation/Validate';
import axios from 'axios';


class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentState: 1,
      users: [
        {
          fullname: '',
          email: '',
          password: '',
          username: '',
          telephone: '',
          image: null,
        }
      ],
      error: '',
      redirect: false
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

    const noError = ['fullname', 'email', 'password'];
    const currentError = Object.keys(this.state.error)[0];
    if (!noError.includes(currentError)) {
      currentState++;
      await this.setState({ currentState });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { users } = { ...this.state };
    const isError = validateSignup(users[0]);
    this.setState({ error: isError });
    this.submitData();
  }

  submitData = () => {
    // send data
    const data = this.state.users[0];
    const formData = new FormData();
    formData.set('fullname', data.fullname);
    formData.set('email', data.email);
    formData.set('password', data.password);
    formData.set('username', data.username);
    formData.set('telephone', data.telephone);
    formData.append('image', data.image);
    const url = "https://chat-app-edition-api.herokuapp.com/api/signup";
    axios.post(url,
      formData,
      {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
    )
      .then(res => {
        const { token } = res.data.data;
        window.localStorage.setItem(token, token);
        this.setState({ redirect: true });
      })
      .catch(err => {
        const { message } = err.response.data;
        const responseError = { response: message };
        this.setState({ error: responseError });
      })
      .catch(err => this.setState({ error: { response: "request failed" } }));
  }

  render() {
    console.log('current', this.state);
    const {
      fullname,
      email,
      password,
      username,
      telephone } = this.state.users[0];
    const { error } = this.state;
    const values = { fullname, email, password, username, telephone };
    return (
      <React.Fragment>
        {this.state.redirect && <Redirect to="/signin" />}
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
