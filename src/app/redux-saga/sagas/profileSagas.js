import { all, fork, race, call, put, takeLatest } from 'redux-saga/effects';
import * as profile from '../modules/profile';
import { getCallReq,getSignInDetails,SignUpDetails,SetDocumentType, verifyOtpDetails, getbankaccList, setbankaccList } from '../../utils/profile';

export function* signUpdetails(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(getCallReq, params),
    });
    if (response) {
      yield put(
        profile.actions.signUpdetailsSuccess({
          data: response,
        }),
      );
    } else {
      yield put(profile.actions.signUpdetailsFailure({ message: 'Fetch failure' }));
    }
  } catch (err) {
    yield put(profile.actions.signUpdetailsFailure({ message: 'Fetch failure' }));
  }
}

export function* addressDetails(action) {
    const params = action.payload;
    try {
      const { response } = yield race({
        response: call(SignUpDetails, params),
      });
      if (response) {
        yield put(
          profile.actions.addressDetailsSuccess({
            data: response,
          }),
        );
      } else {
        yield put(profile.actions.addressDetailsFailure({ message: 'Fetch failure' }));
      }
    } catch (err) {
      yield put(profile.actions.addressDetailsFailure({ message: 'Fetch failure' }));
    }
  }

  export function* documentType(action) {
    const params = action.payload;
    try {
      const { response } = yield race({
        response: call(SetDocumentType, params),
      });
      if (response) {
        yield put(
          profile.actions.documentTypeSuccess({
            data: response,
          }),
        );
      } else {
        yield put(profile.actions.documentTypeFailure({ message: 'Fetch failure' }));
      }
    } catch (err) {
      yield put(profile.actions.documentTypeFailure({ message: 'Fetch failure' }));
    }
  }

  export function* signInDetails(action) {
    const params = action.payload;
    try {
      const { response } = yield race({ 
        response: call(getSignInDetails, params),
      });
      if (response) {
        yield put(
          profile.actions.signInDetailsSuccess({
            data: response,
          }),
        );
      } else {
        yield put(profile.actions.signInDetailsFailure({ message: 'Fetch failure' }));
      }
    } catch (err) {
      yield put(profile.actions.signInDetailsFailure({ message: 'Fetch failure' }));
    }
  }

  export function* verifyLogin(action) {
    const params = action.payload;
    try {
      const { response } = yield race({ 
        response: call(verifyOtpDetails, params),
      });
      if (response) {
        yield put(
          profile.actions.verifyOtpSuccess({
            data: response,
          }),
        );
      } else {
        yield put(profile.actions.verifyOtpFailure({ message: 'Fetch failure' }));
      }
    } catch (err) {
      yield put(profile.actions.verifyOtpFailure({ message: 'Fetch failure' }));
    }
  }

  export function* getBankAccList(action) {
    const params = action.payload;
    try {
      const { response } = yield race({ 
        response: call(getbankaccList, params),
      });
      if (response) {
        yield put(
          profile.actions.getbankAccDetailsSuccess({
            data: response,
          }),
        );
      } else {
        yield put(profile.actions.getbankAccDetailsFailure({ message: 'Fetch failure' }));
      }
    } catch (err) {
      yield put(profile.actions.getbankAccDetailsFailure({ message: 'Fetch failure' }));
    }
  }

  export function* setBankAccList(action) {
    const params = action.payload;
    try {
      const { response } = yield race({ 
        response: call(setbankaccList, params),
      });
      if (response) {
        yield put(
          profile.actions.getbankAccDetailsSuccess({
            data: response,
          }),
        );
      } else {
        yield put(profile.actions.getbankAccDetailsFailure({ message: 'Fetch failure' }));
      }
    } catch (err) {
      yield put(profile.actions.getbankAccDetailsFailure({ message: 'Fetch failure' }));
    }
  }

export function* watchsignUpdetails() {
  yield takeLatest(profile.constants.SIGN_UP_DETAILS, signUpdetails);
}
export function* watchaddressDetails() {
    yield takeLatest(profile.constants.SET_ADDRESS_DETAILS, addressDetails);
  }

export function* watchdocumentType() {
  yield takeLatest(profile.constants.SET_DOCUMENT_TYPE, documentType);
}
export function* watchsignInDetails() {
  yield takeLatest(profile.constants.SIGN_IN_DETAILS, signInDetails);
}

export function* watchverifyLogin() {
  yield takeLatest(profile.constants.VERIFY_OTP, verifyLogin);
}

export function* watchgetBankDetails() {
  yield takeLatest(profile.constants.GET_BANK_ACC_DETAILS, getBankAccList);
}

export function* watchsetBankDetails() {
  yield takeLatest(profile.constants.SET_BANK_ACC_DETAILS, setBankAccList);
}

export default function* root() {
  yield all([
    fork(watchsignUpdetails),
    fork(watchaddressDetails),
    fork(watchdocumentType),
    fork(watchsignInDetails),
    fork(watchverifyLogin),
    fork(watchgetBankDetails),
    fork(watchsetBankDetails)
  ]);
}
