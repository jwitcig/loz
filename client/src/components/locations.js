import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { fetchLocations, deleteAllLocations } from '../actions/locationActions';

import List from './locations-list';
import Map from '../map';

class ListItems extends Component {
  constructor(props) {
    super(props);

    this.deleteAllClicked = this.deleteAllClicked.bind(this);
  }

  componentWillMount() {
    this.props.fetchLocations();
  }

  deleteAllClicked() {
    this.props.deleteAllLocations();
  }

  render() {
    return (
      <div>
        <h1>Location</h1>
        <List locations={this.props.locations}/>

        <Button onClick={this.deleteAllClicked} color="secondary">Delete All</Button>

        <Map center={{ lat: 59.955413, lng: 30.337844 }} zoom={11}/>
      </div>
    )
  }
}

ListItems.propTypes = {
  fetchLocations: PropTypes.func.isRequired,
  deleteAllLocations: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  locations: state.locations.items,
});

export default connect(mapStateToProps, { fetchLocations, deleteAllLocations })(ListItems);
