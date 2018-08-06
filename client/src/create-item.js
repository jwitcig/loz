import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createLocation } from './actions/locationActions';

class Form extends Component {
  state = {}

  constructor(props) {
    super(props);
    this.nameChanged = this.nameChanged.bind(this);
    this.descriptionChanged = this.descriptionChanged.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameChanged(event) {
    this.setState({name: event.target.value});
  }

  descriptionChanged(event) {
    this.setState({description: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createLocation(this.compileDocument())
              .then(locationId => window.location.assign('/locations/'+locationId));
  }

  compileDocument() {
    return {
      name: this.state.name,
      description: this.state.description,
    }
  }

  render() {
    return (
      <form key="create" onSubmit={this.handleSubmit}>
        <FormLabel>name:</FormLabel>
        <TextField type="text" name="name" key="name" onChange={this.nameChanged}/>
        <FormLabel>description:</FormLabel>
        <TextField type="text" name="color" key="color" onChange={this.descriptionChanged}/>
        <Button type="submit">Create</Button>
      </form>
    );
  }
}

Form.propTypes = {
  createLocation: PropTypes.func.isRequired,
  location: PropTypes.object
};

const mapStateToProps = state => ({
  newLocationID: state.locations.item
});

export default connect(mapStateToProps, { createLocation })(Form);
