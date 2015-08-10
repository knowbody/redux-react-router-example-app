import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

/*
  Needed for onTouchTap
  Can go away when react 1.0 release
  Check this repo:
  https://github.com/zilverline/react-tap-event-plugin
*/
injectTapEventPlugin();

import BrowserHistory from 'react-router/lib/BrowserHistory';
import HashHistory from 'react-router/lib/HashHistory';
import Root from './Root';

const history = process.env.NODE_ENV === 'production' ?
  new HashHistory() : new BrowserHistory();

React.render(<Root history={history} />, document.getElementById('root'));
