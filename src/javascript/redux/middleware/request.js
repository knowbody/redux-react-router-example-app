import * as urls from '../../config/urls';
import { defaultParams as defaultFetchParams } from '../modules/utils/fetch';

export default function request({ dispatch }) {
  return (next) => async (action) => {
    const { type, payload = null, meta = {} } = action;

    if (!type || type.constructor !== Array) return next(action);

    const [BEGIN, SUCCESS, FAILURE] = action.type;
    let [url, fetchParams] = meta.fetch;

    dispatch({
      type: BEGIN,
      payload: payload
    });

    fetchParams = {
      ...defaultFetchParams,
      ...fetchParams
    };

    if (url.match(/^http/) === null) url = `${urls.api}${url}`;

    const response = await fetch(url, fetchParams);
    const json = await response.json();

    if (response.status >= 200 && response.status < 300) {
      dispatch({
        type: SUCCESS,
        payload: fetchParams.method === 'delete' ? payload : json
      });
    } else {
      dispatch({
        type: FAILURE,
        error: true,
        payload: fetchParams.method === 'delete' ? payload : json
      });
    }
  };
}

/** Promise version : https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/redux/middleware/clientMiddleware.js
export default function clientMiddleware(client) {
  return ({dispatch, getState}) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, types, ...rest } = action;
      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;
      next({...rest, type: REQUEST});
      return promise(client).then(
        (result) => next({...rest, result, type: SUCCESS}),
        (error) => next({...rest, error, type: FAILURE})
      ).catch((error)=> {
          console.error('MIDDLEWARE ERROR:', error);
          next({...rest, error, type: FAILURE});
        }
      );
    };
  };
}
**/
