import { all, fork, race, call, put, takeLatest } from 'redux-saga/effects';
import * as sellCrypto from '../modules/sellCrypto';
import { setWalletAddress, getWalletAddress } from '../../utils/sellCrypto';

export function* walletAddress(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(setWalletAddress, params),
    });
    if (response) {
      yield put(
        sellCrypto.actions.walletAddressSuccess({
          data: response,
        }),
      );
    } else {
      yield put(sellCrypto.actions.walletAddressFailure({ message: 'Fetch failure' }));
    }
  } catch (err) {
    yield put(sellCrypto.actions.walletAddressFailure({ message: 'Fetch failure' }));
  }
}

export function* getwalletAddress(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(getWalletAddress, params),
    });
    if (response) {
      yield put(
        sellCrypto.actions.getwalletAddressSuccess({
          data: response,
        }),
      );
    } else {
      yield put(sellCrypto.actions.getwalletAddressFailure({ message: 'Fetch failure' }));
    }
  } catch (err) {
    yield put(sellCrypto.actions.getwalletAddressFailure({ message: 'Fetch failure' }));
  }
}


export function* watchwalletAddress() {
    yield takeLatest(sellCrypto.constants.SET_WALLET_ADDRESS, walletAddress);
  }

  export function* watchgetwalletAddress() {
    yield takeLatest(sellCrypto.constants.GET_WALLET_ADDRESS, getwalletAddress);
  }

export default function* root() {
  yield all([
    fork(watchwalletAddress),
    fork(watchgetwalletAddress),
  ]);
}
