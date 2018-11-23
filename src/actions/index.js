import axios from 'axios';
import * as types from '../constants/ActionTypes';

export const client = axios.create({
  baseURL: "https://api.exchangeratesapi.io",
  headers: {
    "Content-Type": "application/json"
  }
})

export const addCurrency = currency => ({ type: types.ADD_CURR, currency });
export const setLatestCurrencies = currencies => ({ type: types.SET_CURR, currencies });
export const removeCurrency = id => ({ type: types.REMOVE_CURR, id });
export const setAmount = value => ({ type: types.ADD_CURR_VALUE, value })
