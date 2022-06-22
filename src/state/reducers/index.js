//jshint esversion:9
import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

const reducers = combineReducers({
  account: accountReducer,
});

export default reducers;
