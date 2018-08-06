import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAccount } from '../actions/accountActions';

import bcrypt from 'bcryptjs';

class Form extends Component {
  state = {}

  constructor(props) {
    super(props);
    this.firstNameChanged = this.firstNameChanged.bind(this);
    this.lastNameChanged = this.lastNameChanged.bind(this);
    this.usernameChanged = this.usernameChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.passwordConfirmationChanged = this.passwordConfirmationChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firstNameChanged(event) {
    this.setState({firstName: event.target.value});
  }

  lastNameChanged(event) {
    this.setState({lastName: event.target.value});
  }

  usernameChanged(event) {
    this.setState({username: event.target.value});
  }

  passwordChanged(event) {
    this.setState({password: event.target.value});
  }

  passwordConfirmationChanged(event) {
    this.setState({passwordConfirmation: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let document = this.compileDocument();
    if (document) {
      this.props.createAccount(this.compileDocument())
                .then(accountId => window.location.assign('/accounts/'+accountId));
    }
  }

  compileDocument() {
    if (this.state.password != this.state.passwordConfirmation) return null;

    let salt = bcrypt.genSaltSync(10);
    let encrypted = bcrypt.hashSync(this.state.password, salt);

    return {
      user: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      },
      username: this.state.username,
      password: {
        salt: salt,
        encrypted: this.state.password,
      },
    };
  }

  render() {
    return (
      <form key="create" onSubmit={this.handleSubmit}>
        <FormLabel>first name:</FormLabel>
        <TextField type="text" key="first-name" onChange={this.firstNameChanged}/>
        <FormLabel>last name:</FormLabel>
        <TextField type="text" key="last-name" onChange={this.lastNameChanged}/>
        <FormLabel>username:</FormLabel>
        <TextField type="text" key="username" onChange={this.usernameChanged}/>
        <FormLabel>password:</FormLabel>
        <TextField type="text" key="password" onChange={this.passwordChanged}/>
        <FormLabel>retype password:</FormLabel>
        <TextField type="text" key="password-confirmation" onChange={this.passwordConfirmationChanged}/>

        <Button type="submit">Create</Button>
      </form>
    );
  }
}

Form.propTypes = {
  createAccount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { createAccount })(Form);
