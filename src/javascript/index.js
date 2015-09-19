import 'babel/polyfill';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

/*
  Needed for onTouchTap
  Can go away when react 1.0 release
  Check this repo:
  https://github.com/zilverline/react-tap-event-plugin
*/
injectTapEventPlugin();

import createBrowserHistory from 'history/lib/createBrowserHistory';
import createHashHistory from 'history/lib/createHashHistory';
import Root from './Root';

const history = process.env.NODE_ENV === 'production' ? createHashHistory() : createBrowserHistory();

React.render(<Root history={history} />, document.getElementById('root'));
