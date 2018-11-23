import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';
import currencies from './currencies';
import amount from './currencyAmount';
import latestCurrencies from './latestCurrencies';

const reducers = {
  currencyStore: currencyReducer,
  amount,
  currencies,
  latestCurrencies
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
