import { LOAD_ITEMS_SUCCESS } from '../actions/item';

export default (state: any = [], action: any = {}) => {
    switch (action.type) {
      case LOAD_ITEMS_SUCCESS:
        return [...state, ...action.payload];
      default:
          return state;
    }
};