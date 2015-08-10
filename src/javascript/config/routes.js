import React, { Component, PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'

import Blog from '../views/Blog';
import Draft from '../views/Draft';
import Login from '../views/Login';

/*
  Here we define our application routing structure - this will then be
  passed in Root.js to the redux Provider component which will pass
  store via React's context to all child components.
  In the child components react-redux/connect has to be used to access
  the application state as is shown in:
  https://github.com/gaearon/react-redux#connect
 */
export default function routes(history) {
  return (
      <Router history={history}>
        <Route path='/' component={Blog} />
        <Route path='/post/new' component={Draft} />
        <Route path='/login' component={Login} />
      </Router>
  )
}