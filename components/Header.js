import React from 'react';

export default class Header {
  render() {
    return (
      <div style={styles.layout}>
        <h1 style={styles.h1}>Redux and React Router Example App</h1>
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
    paddingTop: '20px',
    paddingLeft: '40px'
  }
}
