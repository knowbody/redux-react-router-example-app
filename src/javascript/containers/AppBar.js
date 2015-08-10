import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AppBar extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired
  }

  getStyles() {
    return {
      main: {
        maxWidth: 950,
        margin: '0 auto',
        paddingTop: 10
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
        <div>
          <Header />
          <main style={styles.main}>
            {this.props.children}
            <Footer />
          </main>
        </div>
    );
  }
}

export default connect()(AppBar);
