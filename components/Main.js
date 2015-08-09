import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Blogpost from './Blogpost';
import { removePost } from '../actions/BlogActions';

function select(state) {
  return {
    blogposts: state.blogposts
  };
}

class Main extends Component {
  constructor() {
    super();

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(id) {
    const { dispatch } = this.props;
    dispatch(removePost(id));
  }

  render() {
    let { blogposts } = this.props;

    blogposts = blogposts.map((post, i) =>
      <Blogpost key={i} post={post} index={i} remove={this.handleRemove} />
    );

    return (
      <div>
        {blogposts}
      </div>
    );
  }
}

export default connect(select)(Main);
