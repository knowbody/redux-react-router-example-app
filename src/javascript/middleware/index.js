import thunk from 'redux-thunk';
import logger from './logger';
import request from './request';

export default [
  thunk,
  request,
  logger
];
