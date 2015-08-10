import React, { Component, PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './redux'
import mui from 'material-ui'
import theme from './config/theme'

const ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(theme);

// Views
import Blog from '../views/Blog';
import Draft from '../views/Draft';
import Login from '../views/Login';

export default class Root extends Component {
  /*
   For more details: https://github.com/callemall/material-ui#usage
   Pass material-ui theme through child context
   We are doing this here so we don't have to do it anywhere else.
   */
  static childContextTypes = {
    muiTheme: React.PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const { history } = this.props;
    /*
     Except from https://github.com/gaearon/react-redux#provider
     The Provider component takes a store prop and a function as a child with
     your root component. The store is then passed to the child via React's context.
     This is the entry point for Redux and must be present in order to use the
     Connector component.
     */

    return (
        <Provider store={store}>
          {() =>
            <Router history={history}>
              <Route path='/' component={Blog} />
              <Route path='/post/new' component={Draft} />
              <Route path='/login' component={Login} />
            </Router>
          }
        </Provider>
    )
  }
}