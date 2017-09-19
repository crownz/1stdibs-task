import { FAVORITE_ITEMS_CHANGED, FAVORITES_GOT } from '../actions/favorite';

export default (state: string[] = [], action: any = {}) => {
  switch (action.type) {
    case FAVORITE_ITEMS_CHANGED:
    case FAVORITES_GOT:
      return action.payload;
    default:
      return state;
  }
};