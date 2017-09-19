export const GET_ITEM_STARTED = 'GET_ITEM_STARTED';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAILURE = 'GET_ITEM_FAILURE';

export const CLEAR_ITEM = 'CLEAR_ITEM';

export const getItemStarted = () => ({ type: GET_ITEM_STARTED });
export const getItemSuccess = payload => ({ type: GET_ITEM_SUCCESS, payload });
export const getItemFailure = () => ({ type: GET_ITEM_FAILURE });

export const sendClearItem = () => ({ type: CLEAR_ITEM });

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

export const clearItem = () => {
  return dispatch => {
    dispatch(sendClearItem());
  };
};