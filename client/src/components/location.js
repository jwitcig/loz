import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocation } from '../actions/locationActions';

class Item extends Component {
  componentWillMount() {
    this.props.fetchLocation(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h1>{this.props.location.name}</h1>
        <p>{this.props.location.description}</p>
      </div>
    )
  }
}

Item.propTypes = {
  fetchLocation: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  location: state.locations.item,
});

export default connect(mapStateToProps, { fetchLocation })(Item);
