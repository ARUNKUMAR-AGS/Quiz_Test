import { fork, all } from 'redux-saga/effects';
import FirstSagas from './mainSagas';
import ProfileSagas from './profileSagas';
import SellCrypto from './sellCryptoSaga';
import TradeHistory from './tradeHistorySaga';

export default function* root() {
  yield all([fork(FirstSagas)]);
  yield all([fork(ProfileSagas)]);
  yield all([fork(SellCrypto)]);
  yield all([fork(TradeHistory)]);
}
