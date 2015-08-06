import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AppBar from '../../containers/AppBar'
import Post from './Post'
import * as BlogActions from '../../actions/BlogActions'

class BlogApp extends Component {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { blogposts, dispatch } = this.props;
    const actions = bindActionCreators(BlogActions, dispatch);

    return (
        <AppBar>
          {blogposts.map((post, i) => <Post key={i} post={post} index={i}
                                            onRemove={actions.removePost.bind(this, post.id)}/>)}

        </AppBar>
    );
  }
}

export default connect(state => ({blogposts: state.blogposts}))(BlogApp);