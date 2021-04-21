import { all, fork, race, call, put, takeLatest } from "redux-saga/effects";
import * as tradeHistory from "../modules/tradeHistory";
import {
  getTradeHistorty,
  SettransactionDetails,
  SetpassportDataDetails
} from "../../utils/tradeHistory";

export function* getTradeHistory(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(getTradeHistorty, params)
    });
    if (response) {
      yield put(
        tradeHistory.actions.getTradeHistorySuccess({
          data: response
        })
      );
    } else {
      yield put(
        tradeHistory.actions.getTradeHistoryFailure({
          message: "Fetch failure"
        })
      );
    }
  } catch (err) {
    yield put(
      tradeHistory.actions.getTradeHistoryFailure({ message: "Fetch failure" })
    );
  }
}

export function* transactionDetails(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(SettransactionDetails, params)
    });
    if (response) {
      yield put(
        tradeHistory.actions.transactionDetailsSuccess({
          data: response
        })
      );
    } else {
      yield put(
        tradeHistory.actions.transactionDetailsFailure({
          message: "Fetch failure"
        })
      );
    }
  } catch (err) {
    yield put(
      tradeHistory.actions.transactionDetailsFailure({
        message: "Fetch failure"
      })
    );
  }
}

export function* setpassportDetails(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(SetpassportDataDetails, params)
    });
    if (response) {
      yield put(
        tradeHistory.actions.setPassportDetailsSuccess({
          data: response
        })
      );
    } else {
      yield put(
        tradeHistory.actions.setPassportDetailsFailure({
          message: "Fetch failure"
        })
      );
    }
  } catch (err) {
    yield put(
      tradeHistory.actions.setPassportDetailsFailure({
        message: "Fetch failure"
      })
    );
  }
}

export function* watchgetTradeHistory() {
  yield takeLatest(tradeHistory.constants.GET_TRADE_HISTORY, getTradeHistory);
}

export function* watchtransactionDetails() {
  yield takeLatest(
    tradeHistory.constants.TRANSACTION_DETAILS,
    transactionDetails
  );
}

export function* watchsetPassportDetails() {
  yield takeLatest(
    tradeHistory.constants.SET_PASSPORT_DETAILS,
    setpassportDetails
  );
}

export default function* root() {
  yield all([fork(watchgetTradeHistory), fork(watchtransactionDetails), fork(watchsetPassportDetails)]);
}
