import { combineReducers } from 'redux';
import { quizReducer as quiz } from './modules/quiz';

export default combineReducers({
  quiz
});
