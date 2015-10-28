import 'babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import createHashHistory from 'history/lib/createHashHistory';
import Root from './Root';

/*
  Needed for onTouchTap
  Can go away when react 1.0 release
  Check this repo:
  https://github.com/zilverline/react-tap-event-plugin
*/
injectTapEventPlugin();

render(<Root />, document.getElementById('root'));
