import { combineReducers } from 'redux';
import counter from './counter';
import progressbar from './progressbar';

export default combineReducers({
  counter,
  progressbar,
});
