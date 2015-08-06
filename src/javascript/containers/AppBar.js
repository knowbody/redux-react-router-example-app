import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Grid from 'react-bootstrap/lib/Grid'

class AppBar extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    return (
        <div>
          <Header />
          <Grid style={{ maxWidth: 980 }}>
            {this.props.children}
          </Grid>
          <Footer />
        </div>
    );
  }
}

export default connect(state => ({}))(AppBar);