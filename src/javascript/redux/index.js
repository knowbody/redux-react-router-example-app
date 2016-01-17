import { createStore, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import middleware from './middleware';
import reducer from './modules/reducer';

let finalCreateStore;
if (__DEVELOPMENT__ && __DEVTOOLS__) {
  finalCreateStore = compose(
   applyMiddleware.apply(this, middleware),
   // Provides support for DevTools:
   devTools(),
   // Lets you write ?debug_session=<name> in address bar to persist debug sessions
   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
 )(createStore);
} else {
  finalCreateStore = compose(
   applyMiddleware.apply(this, middleware)
 )(createStore);
}

export const store = finalCreateStore(reducer);
