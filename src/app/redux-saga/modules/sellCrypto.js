export const constants = {  
    SET_SELL_CRYPTO_DATA: 'SET_SELL_CRYPTO_DATA',

    SET_WALLET_ADDRESS:'SET_WALLET_ADDRESS',
    SET_WALLET_ADDRESS_SUCCESS:'SET_WALLET_ADDRESS_SUCCESS',
    SET_WALLET_ADDRESS_FAILURE:'SET_WALLET_ADDRESS_FAILURE',

    GET_WALLET_ADDRESS:'GET_WALLET_ADDRESS',
    GET_WALLET_ADDRESS_SUCCESS:'GET_WALLET_ADDRESS_SUCCESS',
    GET_WALLET_ADDRESS_FAILURE:'GET_WALLET_ADDRESS_FAILURE',

    SELL_ORDER_DETAILS:'SELL_ORDER_DETAILS',
    SELL_ORDER_DETAILS_SUCCESS:'SELL_ORDER_DETAILS_SUCCESS',
    SELL_ORDER_DETAILS_FAILURE:'SELL_ORDER_DETAILS_FAILURE',
  };
  
  export const actions = {
    onSellCryptoDataChange: params => {
      return{
        type: constants.SET_SELL_CRYPTO_DATA,
        payload: params,
      }
    },

    setwalletAddress: params => {
      return{
        type: constants.SET_WALLET_ADDRESS,
        payload: params,
      }
    },
   setwalletAddressSuccess: response => {
      return{
        type: constants.SET_WALLET_ADDRESS_SUCCESS,
        payload: response,
      }
    },
   setwalletAddressFailure: response => {
      return{
        type: constants.SET_WALLET_ADDRESS_FAILURE,
        payload: response,
      }
    },

    getwalletAddress: params => {
      return{
        type: constants.GET_WALLET_ADDRESS,
        payload: params,
      }
    },
   getwalletAddressSuccess: response => {
      return{
        type: constants.GET_WALLET_ADDRESS_SUCCESS,
        payload: response,
      }
    },
   getwalletAddressFailure: response => {
      return{
        type: constants.GET_WALLET_ADDRESS_FAILURE,
        payload: response,
      }
    },
    sellOrderDetails: params => {
      console.log(params,'params')
      return{
        type: constants.SELL_ORDER_DETAILS,
        payload: params,
      }
    },
  //  sellOrderDetailsSuccess: response => {
  //     return{
  //       type: constants.SELL_ORDER_DETAILS_SUCCESS,
  //       payload: response,
  //     }
  //   },
  //  sellOrderDetailsFailure: response => {
  //     return{
  //       type: constants.SELL_ORDER_DETAILS_FAILURE,
  //       payload: response,
  //     }
  //   },
  };
  
  export const initialState = {
    sellCryptoData: null,
    isLoading: false,
    sellCoinDetails:null,
    walltetAddressList: null,
    isAddressLoading: false,
  };
  
  export const sellCryptoReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_SELL_CRYPTO_DATA:
          return {
            ...state,
            sellCryptoData: {...state.sellCryptoData, ...action.payload},
          }
          case constants.SET_WALLET_ADDRESS:
              return {
                ...state,sellCryptoData: action.payload, 
                isLoading: true,
              };
          case constants.SET_WALLET_ADDRESS_SUCCESS:
            return {
              ...state, sellCryptoData: action.payload,
              isLoading: false,
            };
          case constants.SET_WALLET_ADDRESS_FAILURE:
            return {
              ...state, sellCryptoData: [], isLoading: false,
            };
          case constants.SELL_ORDER_DETAILS:
            return {
              ...state,sellCoinDetails: action.payload, 
              isLoading: true,
            };
          case constants.SELL_ORDER_DETAILS_SUCCESS:
            return {
              ...state, sellCoinDetails: action.payload,
              isLoading: false,
            };
          case constants.SELL_ORDER_DETAILS_FAILURE:
            return {
              ...state, sellCoinDetails: [], isLoading: false,
            };
          case constants.GET_WALLET_ADDRESS:
            return{
              ...state, isAddressLoading: true
            }
          case constants.GET_WALLET_ADDRESS_SUCCESS:
              return{
                ...state, isAddressLoading: false, walltetAddressList: action.payload.data.wallets
              }
          case constants.GET_WALLET_ADDRESS_FAILURE:
              return{
                ...state, isAddressLoading: false, walltetAddressList: null
              }
      default:
        return state;
    }
  };
  
  export default actions;
  