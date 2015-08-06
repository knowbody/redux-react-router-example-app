import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as BlogActions from '../../actions/AuthActions'

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(BlogActions, dispatch);

    return (
        <div>
          <input type="text" />
        </div>
    );
  }
}

export default connect(state => ({
  user: state.user
}))(Login);