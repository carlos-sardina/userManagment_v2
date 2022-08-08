/* eslint-disable no-underscore-dangle */
import { legacy_createStore as createStore, combineReducers } from 'redux';

import users from './reducers/users';

const reducer = combineReducers({
  users,
});

const devtoools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducer, devtoools);
