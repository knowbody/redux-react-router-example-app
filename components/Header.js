import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    let newPost = null;
    if (this.props.location.pathname === '/new') {
      newPost = <Link to='/' style={styles.link}>view all posts</Link>;
    } else {
      newPost = <Link to='/new' style={styles.link}>add new post</Link>;
    }

    return (
      <div style={styles.layout}>
        <Link to='/' style={styles.h1}>Redux and React Router Example App</Link>
        {newPost}
      </div>
    );
  }
}

let styles = {
  layout: {
    height: '80px',
    background: 'linear-gradient(90deg, #1B8895 10%, #4ACDBD 90%)',
    color: 'white'
  },

  h1: {
    fontSize: '34px',
    textDecoration: 'none',
    color: 'white',
    paddingTop: '20px',
    paddingLeft: '40px',
    display: 'inline-block'
  },

  link: {
    paddingTop: '30px',
    paddingRight: '40px',
    display: 'inline-block',
    float: 'right'
  }
}
