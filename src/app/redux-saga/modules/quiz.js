
export const constants = {

  GET_QUIZ: 'GET_QUIZ',
  GET_QUIZ_SUCCESS: 'GET_QUIZ_SUCCESS',
  GET_QUIZ_FAILURE: 'GET_QUIZ_FAILURE',

};

export const actions = {
  getQuiz: params => {
    return{
      type: constants.GET_QUIZ,
      payload: params,
    }
  },
  getQuizSuccess: response => {
    return{
      type: constants.GET_QUIZ_SUCCESS,
      payload: response,
    }
  },
  getQuizFailure: response => {
    return{
      type: constants.GET_QUIZ_FAILURE,
      payload: response,
    }
  }
};

export const initialState = {
  quiz_data: null,
  isLoading: false,
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
      case constants.GET_QUIZ:
        return {
          ...state, isLoading: true,
        };
      case constants.GET_QUIZ_SUCCESS:
        console.log(action.payload.data,"action.payload.data")
        return {
          ...state, quiz_data: action.payload.data, isLoading: false,
        };
      case constants.GET_QUIZ_FAILURE:
        return {
          ...state, details: [], isLoading: false,
        };
    default:
      return state;
  }
};

export default actions;
