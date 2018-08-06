import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchLocation } from '../actions/locationActions';
import { fetchComments } from '../actions/commentActions';

import NewComment from './new-comment';

class Item extends Component {
  componentWillMount() {
    this.props.fetchLocation(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id, 'location');
  }

  render() {
    console.log(JSON.stringify(this.props));
    return (
      <div>
        <h1>{this.props.location.name}</h1>
        <p>{this.props.location.description}</p>

        <NewComment ownerId={this.props.location._id}/>

        {this.props.comments.map(comment => (
          <p>{comment.body}</p>
        ))}
      </div>
    )
  }
}

Item.propTypes = {
  fetchLocation: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  location: state.locations.item,
  comments: state.comments.items,
});

export default connect(mapStateToProps, { fetchLocation, fetchComments })(Item);
