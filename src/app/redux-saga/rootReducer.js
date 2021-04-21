import { combineReducers } from 'redux';
import { initialReducer as initial } from './modules/initial';
import { profileReducer as profile } from './modules/profile';
import { sellCryptoReducer as sellCrypto } from './modules/sellCrypto';
import {tradeHistoryReducer as tradeHistory} from './modules/tradeHistory';
import {buyCryptoReducer as buyCrypto} from './modules/buyCrypto';

export default combineReducers({
  initial,
  profile,
  sellCrypto,
  tradeHistory,
  buyCrypto,
});
