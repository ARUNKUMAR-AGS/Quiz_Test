import { fork, all } from 'redux-saga/effects';
import QuizSaga from './quizSagas';

export default function* root() {
  yield all([fork(QuizSaga)]);
}
