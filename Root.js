import React, { Component, PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import * as reducers from './reducers';
import BlogApp from './containers/BlogApp';
import Main from './components/Main';
import AddPost from './components/AddPost';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props;

    return (
      <Provider store={store}>
        {() =>
          <Router history={history}>
            <Route component={BlogApp}>
              <Route path='/' component={Main} />
              <Route path='new' component={AddPost} />
            </Route>
          </Router>
        }
      </Provider>
    )
  }
}
