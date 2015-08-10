import React, { Component } from 'react';

const styles = {
  layout: {
    height: '100px'
  },

  footerText: {
    textAlign: 'right',
    padding: '40px 0',
    fontSize: '10px'
  }
};

export default class Footer extends Component {
  render() {
    return (
        <div style={styles.layout}>
          <div style={styles.footerText}>
            Contribute to the&nbsp;
            <a href='https://github.com/knowbody/redux-react-router-example-app'
               target='_blank'>project on GitHub</a>.
          </div>
        </div>
    );
  }
}
