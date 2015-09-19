import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from './reducers';
import middleware from './middleware';
import { devTools, persistState } from 'redux-devtools'

const reducer = combineReducers(reducers);

let finalCreateStore;
if(__DEVELOPMENT__ && __DEVTOOLS__){
  finalCreateStore = compose(
   applyMiddleware.apply(this, middleware),
   // Provides support for DevTools:
   devTools(),
   // Lets you write ?debug_session=<name> in address bar to persist debug sessions
   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
 )(createStore);
}else{
  finalCreateStore = compose(
   applyMiddleware.apply(this, middleware)
 )(createStore);
}


export const store = finalCreateStore(reducer);
