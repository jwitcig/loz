import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';

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

    this.props.createComment(this.compileDocument())
              .then(locationId => window.location.assign('/locations/'+locationId));
  }

  compileDocument() {
    return {
      owner: { id: this.props.ownerId, modelType: 'location' },
      body: this.state.body,
    }
  }

  render() {
    return (
      <form key="create" onSubmit={this.handleSubmit}>
        <FormLabel>text:</FormLabel>
        <TextField type="text" name="body" key="body" onChange={this.handleChanged}/>
        <Button type="submit">Create</Button>
      </form>
    );
  }
}

Form.propTypes = {
  createComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, { createComment })(Form);
