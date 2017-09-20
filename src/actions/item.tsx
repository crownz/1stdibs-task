export const GET_ITEM_STARTED = 'GET_ITEM_STARTED';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const LOAD_ITEMS_STARTED = 'LOAD_ITEMS_STARTED';
export const LOAD_ITEMS_SUCCESS = 'LOAD_ITEMS_SUCCESS';
export const LOAD_ITEMS_FAILURE = 'LOAD_ITEMS_FAILURE';

export const CLEAR_ITEM = 'CLEAR_ITEM';

export const getItemStarted = () => ({ type: GET_ITEM_STARTED });
export const getItemSuccess = payload => ({ type: GET_ITEM_SUCCESS, payload });
export const getItemFailure = () => ({ type: GET_ITEM_FAILURE });

export const loadItemsStarted = () => ({ type: LOAD_ITEMS_STARTED });
export const loadItemsSuccess = payload => ({ type: LOAD_ITEMS_SUCCESS, payload });
export const loadItemsFailure = () => ({ type: LOAD_ITEMS_FAILURE });

export const sendClearItem = () => ({ type: CLEAR_ITEM });

//TODO use started actions to display loader..

export const getItem = (id: string) => {
  return dispatch => {
    dispatch(getItemStarted());
    return fetch(`/api/item/${id}`, {
      method: 'GET',
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(data => dispatch(getItemSuccess(data)))
      .catch(() => dispatch(getItemFailure()));
  };
};

export const loadItems = (start: number, limit: number) => {
  return dispatch => {
    dispatch(loadItemsStarted());
    return fetch(`/browse/data?start=${start}&limit=${limit}`, {
      method: 'GET',
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(data => dispatch(loadItemsSuccess(data.items)))
      .catch(() => dispatch(loadItemsFailure()));
  };
};

export const clearItem = () => {
  return dispatch => {
    dispatch(sendClearItem());
  };
};