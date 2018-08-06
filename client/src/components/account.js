import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAccount } from '../actions/accountActions';

class Account extends Component {
  componentWillMount() {
    this.props.fetchAccount(this.props.match.params.id);
  }

  render() {
    if (!this.props.account) return <div/>;
    return (
      <div>
        <h1>{this.props.account.user.firstName}</h1>
        <p>{this.props.account.user.lastName}</p>
      </div>
    )
  }
}

Account.propTypes = {
  fetchAccount: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  // alert(JSON.stringify(state));
  return {
    account: state.accounts.item,
    // account: {
    //   user: {firstName: 'jonah', lastName: 'witcig123'}
    // }
  }

};

export default connect(mapStateToProps, { fetchAccount })(Account);
