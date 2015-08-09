import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class BlogApp extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    return (
      <div style={styles.layout}>
        <Header location={this.props.location}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

let styles = {
  layout: {
    fontFamily: 'Lato'
  }
}
