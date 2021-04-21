export const constants = {  
    BUY_ORDER_DETAILS:'BUY_ORDER_DETAILS',
    BUY_ORDER_DETAILS_SUCCESS:'BUY_ORDER_DETAILS_SUCCESS',
    BUY_ORDER_DETAILS_FAILURE:'BUY_ORDER_DETAILS_FAILURE',
  };
  
  export const actions = {
    buyOrderDetails: params => {
      return{
        type: constants.BUY_ORDER_DETAILS,
        payload: params,
      }
    },
   buyOrderDetailsSuccess: response => {
      return{
        type: constants.BUY_ORDER_DETAILS_SUCCESS,
        payload: response,
      }
    },
   buyOrderDetailsFailure: response => {
      return{
        type: constants.BUY_ORDER_DETAILS_FAILURE,
        payload: response,
      }
    },
  };
  
  export const initialState = {
      buyCryptoDetails:null,
      isLoading: false,
  };
  
  export const buyCryptoReducer = (state = initialState, action) => {
    switch (action.type) {
              case constants.BUY_ORDER_DETAILS:
                return {
                  ...state,buyCryptoDetails: action.payload, 
                  isLoading: true,
                };
              case constants.BUY_ORDER_DETAILS_SUCCESS:
                return {
                  ...state, buyCryptoDetails: action.payload,
                  isLoading: false,
                };
              case constants.BUY_ORDER_DETAILS_FAILURE:
                return {
                  ...state, buyCryptoDetails: [], isLoading: false,
                };
      default:
        return state;
    }
  };
  
  export default actions;
  