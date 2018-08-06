import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/accountActions';

class Form extends Component {
  componentWillMount() {
    this.props.logout();
  }

  render() {
    if (this.props.loggedOut) return (<Redirect to='/locations'/>);
    return null;
  }
}

Form.propTypes = {
  logout: PropTypes.func.isRequired,
  loggedOut: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  loggedOut: state.accounts.currentUserId === null || false,
});

export default connect(mapStateToProps, { logout })(Form);
