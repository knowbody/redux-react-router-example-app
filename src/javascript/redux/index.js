import { createStore, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import middleware from './middleware';
import reducer from './modules/reducer';
import DevTools from '../containers/DevTools';

let finalCreateStore;
if (__DEVELOPMENT__ && __DEVTOOLS__) {
  finalCreateStore = compose(
   applyMiddleware.apply(this, middleware),
   // Provides support for DevTools:
   DevTools.instrument(),
   // Optional. Lets you write ?debug_session=<key> in address bar to persist debug sessions
   persistState(getDebugSessionKey())
 )(createStore);
} else {
  finalCreateStore = compose(
   applyMiddleware.apply(this, middleware)
 )(createStore);
}

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

export const store = finalCreateStore(reducer);
