import { GET_ITEM_SUCCESS } from '../actions/item';

export default (state: Item = null, action: any = {}) => {
  switch (action.type) {
    case GET_ITEM_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};