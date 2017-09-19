import { combineReducers } from 'redux';
import items from './items';
import item from './item';

export default combineReducers({
  items,
  item
});