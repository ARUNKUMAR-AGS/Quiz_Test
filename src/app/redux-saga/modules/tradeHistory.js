export const constants = {  
    GET_TRADE_HISTORY:'GET_TRADE_HISTORY',
    GET_TRADE_HISTORY_SUCCESS:'GET_TRADE_HISTORY_SUCCESS',
    GET_TRADE_HISTORY_FAILURE:'GET_TRADE_HISTORY_FAILURE',

    TRANSACTION_DETAILS:'TRANSACTION_DETAILS',
    TRANSACTION_DETAILS_SUCCESS:'TRANSACTION_DETAILS_SUCCESS',
    TRANSACTION_DETAILS_FAILURE:'TRANSACTION_DETAILS_FAILURE',

    SET_PASSPORT_DETAILS:'SET_PASSPORT_DETAILS',
    SET_PASSPORT_DETAILS_SUCCESS:'SET_PASSPORT_DETAILS_SUCCESS',
    SET_PASSPORT_DETAILS_FAILURE:'SET_PASSPORT_DETAILS_FAILURE',


    CLEAR_MESSAGE: "CLEAR_MESSAGE"

  };
  
  export const actions = {
    getTradeHistory: params => {
      return{
        type: constants.GET_TRADE_HISTORY,
        payload: params,
      }
    },
   getTradeHistorySuccess: response => {
      return{
        type: constants.GET_TRADE_HISTORY_SUCCESS,
        payload: response,
      }
    },
   getTradeHistoryFailure: response => {
      return{
        type: constants.GET_TRADE_HISTORY_FAILURE,
        payload: response,
      }
    },
    transactionDetails: params => {
      return{
        type: constants.TRANSACTION_DETAILS,
        payload: params,
      }
    },
   transactionDetailsSuccess: response => {
      return{
        type: constants.TRANSACTION_DETAILS_SUCCESS,
        payload: response,
      }
    },
   transactionDetailsFailure: response => {
      return{
        type: constants.TRANSACTION_DETAILS_FAILURE,
        payload: response,
      }
    },
    clearMessage: params => {
      return {
        type: constants.CLEAR_MESSAGE,
        payload: params
      }
    },
    setPassportDetails: params => {
      return{
        type: constants.SET_PASSPORT_DETAILS,
        payload: params,
      }
    },
   setPassportDetailsSuccess: response => {
      return{
        type: constants.SET_PASSPORT_DETAILS_SUCCESS,
        payload: response,
      }
    },
   setPassportDetailsFailure: response => {
      return{
        type: constants.SET_PASSPORT_DETAILS_FAILURE,
        payload: response,
      }
    },
  };
  
  export const initialState = {
    tradeHistory: null,
    isLoading: false,
    trademessage: null,
  };
  
  export const tradeHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.CLEAR_MESSAGE:
        return {
          ...state,
          trademessage: null,
        }
      case constants.GET_TRADE_HISTORY:
        return {
          ...state,
          isLoading: true
        };
      case constants.GET_TRADE_HISTORY_SUCCESS:
        return {
          ...state,
          tradeHistory: action.payload,
          isLoading: false
        };
      case constants.GET_TRADE_HISTORY_FAILURE:
        return {
          ...state,
          tradeHistory: [],
          isLoading: false
        };
      case constants.TRANSACTION_DETAILS:
        return {
          ...state,
          isLoading: true
        };
      case constants.TRANSACTION_DETAILS_SUCCESS:
        return {
          ...state,
          tradeHistory: action.payload,
          trademessage: action.payload.data.status,
          isLoading: false
        };
      case constants.TRANSACTION_DETAILS_FAILURE:
        return {
          ...state,
          tradeHistory: [],
          isLoading: false,
          trademessage: "Failed"
        };
      default:
        return state;
    }
  };
  
  export default actions;
  