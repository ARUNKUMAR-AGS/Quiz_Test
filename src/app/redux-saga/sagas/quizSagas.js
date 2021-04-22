import { all, fork, race, call, put, takeLatest } from 'redux-saga/effects';
import * as Quiz from '../modules/quiz';
import { getCallReq } from '../../utils/Quiz';

export function* quizSaga(action) {
  const params = action.payload;
  try {
    const { response } = yield race({
      response: call(getCallReq, params),
    });
    if (response) {
      console.log(response,"response//")
      yield put(
        Quiz.actions.getQuizSuccess({
          data: response,
        }),
      );
    } else {
      yield put(Quiz.actions.getQuizFailure({ message: 'Fetch failure' }));
    }
  } catch (err) {
    yield put(Quiz.actions.getQuizFailure({ message: 'Fetch failure' }));
  }
}

export function* watchFirstReq() {
  yield takeLatest(Quiz.constants.GET_QUIZ, quizSaga);
}

export default function* root() {
  yield all([
    fork(watchFirstReq),
  ]);
}
