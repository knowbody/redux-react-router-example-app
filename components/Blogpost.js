import React, { PropTypes } from 'react';

export default class Blogpost {
  static propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  }

  render() {
    const { index, post } = this.props;

    return (
      <div style={(index % 2) === 0 ? styles.pane.even : styles.pane.odd}>
        <h2>{post.title}</h2>
        <h5>{post.intro}</h5>
        <p>{post.body}</p>
      </div>
    );
  }
}

let styles = {
  pane: {
    even: {
      padding: '5% 20% 5% 20%',
      height: '300px',
      backgroundColor: '#f8f8f8'
    },

    odd:{
      padding: '5% 20% 5% 20%',
      height: '300px'
    }
  }
}
