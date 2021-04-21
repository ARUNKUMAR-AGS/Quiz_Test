
export const constants = {

  FIRST_CALL: 'FIRST_CALL',
  FIRST_CALL_SUCCESS: 'FIRST_CALL_SUCCESS',
  FIRST_CALL_FAILURE: 'FIRST_CALL_FAILURE',

  GET_CURRENCIES_LIST:'GET_CURRENCIES_LIST',
  GET_CURRENCIES_LIST_SUCCESS:'GET_CURRENCIES_LIST_SUCCESS',
  GET_CURRENCIES_LIST_FAILURE:'GET_CURRENCIES_LIST_FAILURE',
 
  LANG_CHANGE: 'LANG_CHANGE',
  CURRENCY_CHANGE: "CURRENCY_CHANGE",
  TRANSACTION_TYPE: "TRANSACTION_TYPE",
  PAYMENT_TYPE: "PAYMENT_TYPE",
};

export const actions = {
  firstCall: params => {
    return{
      type: constants.FIRST_CALL,
      payload: params,
    }
  },
  firstCallSuccess: response => {
    return{
      type: constants.FIRST_CALL_SUCCESS,
      payload: response,
    }
  },
  firstCallFailure: response => {
    return{
      type: constants.FIRST_CALL_FAILURE,
      payload: response,
    }
  },
  getCurrencies: params => {
    return{
      type: constants.GET_CURRENCIES_LIST,
      payload: params,
    }
  },
 getCurrenciesSuccess: response => {
    return{
      type: constants.GET_CURRENCIES_LIST_SUCCESS,
      payload: response,
    }
  },
 getCurrenciesFailure: response => {
    return{
      type: constants.GET_CURRENCIES_LIST_FAILURE,
      payload: response,
    }
  },
  onLanguageChange: params => {
    return{
      type: constants.LANG_CHANGE,
      payload: params,
    }
  },
  onCurrencyChange: params => {
    return{
      type: constants.CURRENCY_CHANGE,
      payload: params,
    }
  },
  onTransactionType: params => {
    return{
      type: constants.TRANSACTION_TYPE,
      payload: params,
    }
  },
  onPaymentType: params => {
    return{
      type: constants.PAYMENT_TYPE,
      payload: params,
    }
  },
};

export const initialState = {
  details: null,
  isLoading: false,
  defaultLanguage: null,
  defaultCurrency: null,
  currencyList:null,
  flowType: null,
  paymentType:null,
};

export const initialReducer = (state = initialState, action) => {
  switch (action.type) {
      case constants.FIRST_CALL:
        return {
          ...state, isLoading: true,
        };
      case constants.FIRST_CALL_SUCCESS:
        return {
          ...state, details: action.payload, isLoading: false,
        };
      case constants.FIRST_CALL_FAILURE:
        return {
          ...state, details: [], isLoading: false,
        };
        case constants.GET_CURRENCIES_LIST:
        return {
          ...state, isLoading: true,
        };
      case constants.GET_CURRENCIES_LIST_SUCCESS:
        return {
          ...state, currencyList: action.payload.data && action.payload.data.response,
          isLoading: false,
        };
      case constants.GET_CURRENCIES_LIST_FAILURE:
        return {
          ...state, currencyList: [], isLoading: false,
        };
       
      case constants.LANG_CHANGE:
        return {
          ...state,
          defaultLanguage: action.payload,
        }
      case constants.CURRENCY_CHANGE: {
        return {
          ...state,
          defaultCurrency: action.payload,
        }
      }
      case constants.TRANSACTION_TYPE: {
        return {
          ...state,
          flowType: action.payload,
        }
      }
      case constants.PAYMENT_TYPE: {
        return {
          ...state,
          paymentType: action.payload,
        }
      }
    default:
      return state;
  }
};

export default actions;
