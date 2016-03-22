import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from '../../containers/AppBar';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Post from './Post';
import * as BlogActions from '../../redux/modules/blogposts';

class BlogApp extends Component {
  static propTypes = {
    blogposts: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static contextTypes = {
    history: PropTypes.object.isRequired
  }

  getStyles() {
    return {
      addContent: {
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 100
      }
    };
  }

  render() {
    const { history } = this.context;
    const { blogposts, users, dispatch } = this.props;
    const actions = bindActionCreators(BlogActions, dispatch);
    const styles = this.getStyles();

    return (
        <AppBar>
          {blogposts.map((post, i) =>
                  <Post key={i}
                        post={post}
                        user={users.filter(user => user.id === post.user)[0]}
                        actions={actions}/>
          )}
          <FloatingActionButton style={styles.addContent}
                                onTouchTap={() => {
                                  history.pushState(null, '/post/new');
                                }}>
            <ContentAdd />
          </FloatingActionButton>
        </AppBar>
    );
  }
}

export default connect(state => ({
  blogposts: state.blogposts,
  users: state.users
}))(BlogApp);
