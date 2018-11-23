import { client } from './';

const url = '/latest?base=USD';

export function fetchCurrency() {
  return dispatch => {
    dispatch({
      type: 'FETCH_CURRENCY',
      payload: client.get(url)
    })
  }
}
