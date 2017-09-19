import { getCookie, setCookie } from '../services/cookies';

export const FAVORITE_ITEMS_CHANGED = 'FAVORITE_ITEM_ADDED';
export const FAVORITES_GOT = 'FAVORITE_ITEM_ADDED';

export const favoriteItemsChanged = payload => ({ type: FAVORITE_ITEMS_CHANGED, payload });
export const favoritesGot = payload => ({ type: FAVORITES_GOT, payload });

const FAVORITES = 'favorites';

export const toggleFavoriteItem = (id: string) => {
  return dispatch => {
    let favorites: any = getCookie(FAVORITES);
    favorites = favorites ? favorites.split(',') : [];
    if (!favorites.includes(id)) {
      favorites.push(id);
    } else {
      favorites.splice(favorites.indexOf(id), 1);
    }

    const newCookies = favorites.join(',')
    setCookie(FAVORITES, newCookies);
    dispatch(favoriteItemsChanged(favorites));
  }
};

export const getFavorites = () => {
  return dispatch => {
    let favorites: any = getCookie(FAVORITES);
    favorites = favorites ? favorites.split(',') : [];
    dispatch(favoritesGot(favorites));
  }
};