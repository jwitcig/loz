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
    this.handleChanged = this.handleChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanged(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
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
    if (this.state.password !== this.state.passwordConfirmation) return null;

    let salt = bcrypt.genSaltSync(10);
    // let encrypted = bcrypt.hashSync(this.state.password, salt);

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
        <TextField type="text" key="first-name" name="firstName" onChange={this.handleChanged}/>
        <FormLabel>last name:</FormLabel>
        <TextField type="text" key="last-name" name="lastName" onChange={this.handleChanged}/>
        <FormLabel>username:</FormLabel>
        <TextField type="text" key="username" name="username" onChange={this.handleChanged}/>
        <FormLabel>password:</FormLabel>
        <TextField type="text" key="password" name="password" onChange={this.handleChanged}/>
        <FormLabel>retype password:</FormLabel>
        <TextField type="text" key="password-confirmation" name="passwordConfirmation" onChange={this.handleChanged}/>

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
