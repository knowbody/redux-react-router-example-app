import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { store } from './redux';
import withMaterialUI from './decorators/withMaterialUI';
import * as hooks from './hooks';
// Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import Blog from './views/Blog';
import Draft from './views/Draft';
import Login from './views/Login';

hooks.bootstrap(store)();

@withMaterialUI
export default class Root extends Component {
  render() {
    return (
        <div>
          <Provider store={store}>
            <Router history={createBrowserHistory()}>
              <Route path='/' component={Blog} />
              <Route path='/post/:id/edit' component={Draft} onEnter={hooks.editPost(store)}/>
              <Route path='/post/new' component={Draft}/>
              <Route path='/login' component={Login}/>
            </Router>
          </Provider>
          <DebugPanel top right bottom>
            <DevTools store={store} monitor={LogMonitor} />
          </DebugPanel>
        </div>
    );
  }
};
