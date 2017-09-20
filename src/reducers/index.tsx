import { combineReducers } from 'redux';
import items from './items';
import item from './item';
import favorite from './favorite';
import totalItems from './totalItems';

export default combineReducers({
  items,
  item,
  favorite,
  totalItems
});