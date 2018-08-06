import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../actions/accountActions';

class Form extends Component {
  state = {}

  constructor(props) {
    super(props);
    this.handleChanged = this.handleChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanged(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.login(this.state.username, this.state.password);
  }

  render() {
    if (this.props.accountId) return (<div>hey</div>);

    return (
      <form key="create" onSubmit={this.handleSubmit}>
        <FormLabel>username:</FormLabel>
        <TextField type="text" key="username" name="username" onChange={this.handleChanged}/>
        <FormLabel>password:</FormLabel>
        <TextField type="text" key="password" name="password" onChange={this.handleChanged}/>

        <Button type="submit">Create</Button>
      </form>
    );
  }
}

Form.propTypes = {
  login: PropTypes.func.isRequired,
  accountId: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  accountId: state.accounts.currentUserId
});

export default connect(mapStateToProps, { login })(Form);
