
export const constants = {  
    SET_PROFILE_DATA: 'SET_PROFILE_DATA',

    SIGN_UP_DETAILS:'SIGN_UP_DETAILS',
    SIGN_UP_DETAILS_SUCCESS:'SIGN_UP_DETAILS_SUCCESS',
    SIGN_UP_DETAILS_FAILURE:'SIGN_UP_DETAILS_FAILURE',

    SET_ADDRESS_DETAILS:'SET_ADDRESS_DETAILS',
    SET_ADDRESS_DETAILS_SUCCESS:'SET_ADDRESS_DETAILS_SUCCESS',
    SET_ADDRESS_DETAILS_FAILURE:'SET_ADDRESS_DETAILS_FAILURE',

    SET_DOCUMENT_TYPE:'SET_DOCUMENT_TYPE',
    SET_DOCUMENT_TYPE_SUCCESS:'SET_DOCUMENT_TYPE_SUCCESS',
    SET_DOCUMENT_TYPE_FAILURE:'SET_DOCUMENT_TYPE_FAILURE',

    SIGN_IN_DETAILS:'SIGN_IN_DETAILS',
    SIGN_IN_DETAILS_SUCCESS:'SIGN_IN_DETAILS_SUCCESS',
    SIGN_IN_DETAILS_FAILURE:'SIGN_IN_DETAILS_FAILURE',

    VERIFY_OTP:'VERIFY_OTP',
    VERIFY_OTP_SUCCESS:'VERIFY_OTP_SUCCESS',
    VERIFY_OTP_FAILURE:'VERIFY_OTP_FAILURE',

    GET_BANK_ACC_DETAILS:'GET_BANK_ACC_DETAILS',
    GET_BANK_ACC_DETAILS_SUCCESS:'GET_BANK_ACC_DETAILS_SUCCESS',
    GET_BANK_ACC_DETAILS_FAILURE:'GET_BANK_ACC_DETAILS_FAILURE',

    SET_BANK_ACC_DETAILS:'SET_BANK_ACC_DETAILS',
    SET_BANK_ACC_DETAILS_SUCCESS:'SET_BANK_ACC_DETAILS_SUCCESS',
    SET_BANK_ACC_DETAILS_FAILURE:'SET_BANK_ACC_DETAILS_FAILURE',

    CLEAR_USER_DETAILS: "CLEAR_USER_DETAILS",
  };
  
  export const actions = {
    onProfileChange: params => {
      return{
        type: constants.SET_PROFILE_DATA,
        payload: params,
      }
    },
    signUpdetails: params => {
      return{
        type: constants.SIGN_UP_DETAILS,
        payload: params,
      }
    },
   signUpdetailsSuccess: response => {
      return{
        type: constants.SIGN_UP_DETAILS_SUCCESS,
        payload: response,
      }
    },
   signUpdetailsFailure: response => {
      return{
        type: constants.SIGN_UP_DETAILS_FAILURE,
        payload: response,
      }
    },
    addressDetails: params => {
      // console.log(params,'ew')
      return{
        type: constants.SET_ADDRESS_DETAILS,
        payload: params,
      }
    },
   addressDetailsSuccess: response => {
      return{
        type: constants.SET_ADDRESS_DETAILS_SUCCESS,
        payload: response,
      }
    },
   addressDetailsFailure: response => {
      return{
        type: constants.SET_ADDRESS_DETAILS_FAILURE,
        payload: response,
      }
    },
    documentType: params => {
      return{
        type: constants.SET_DOCUMENT_TYPE,
        payload: params,
      }
    },
   documentTypeSuccess: response => {
      return{
        type: constants.SET_DOCUMENT_TYPE_SUCCESS,
        payload: response,
      }
    },
   documentTypeFailure: response => {
      return{
        type: constants.SET_DOCUMENT_TYPE_FAILURE,
        payload: response,
      }
    },
    signInDetails: params => {
      return{
        type: constants.SIGN_IN_DETAILS,
        payload: params,
      }
    },
   signInDetailsSuccess: response => {
      return{
        type: constants.SIGN_IN_DETAILS_SUCCESS,
        payload: response,
      }
    },
   signInDetailsFailure: response => {
      return{
        type: constants.SIGN_IN_DETAILS_FAILURE,
        payload: response,
      }
    },
    verifyOtp: params => {
      return{
        type: constants.VERIFY_OTP,
        payload: params,
      }
    },
   verifyOtpSuccess: response => {
      return{
        type: constants.VERIFY_OTP_SUCCESS,
        payload: response,
      }
    },
   verifyOtpFailure: response => {
      return{
        type: constants.VERIFY_OTP_FAILURE,
        payload: response,
      }
    },
    getbankAccDetails: params => {
      return{
        type: constants.GET_BANK_ACC_DETAILS,
        payload: params,
      }
    },
   getbankAccDetailsSuccess: response => {
      return{
        type: constants.GET_BANK_ACC_DETAILS_SUCCESS,
        payload: response,
      }
    },
   getbankAccDetailsFailure: response => {
      return{
        type: constants.GET_BANK_ACC_DETAILS_FAILURE,
        payload: response,
      }
    },
    setbankAccDetails: params => {
      return{
        type: constants.SET_BANK_ACC_DETAILS,
        payload: params,
      }
    },
   setbankAccDetailsSuccess: response => {
      return{
        type: constants.SET_BANK_ACC_DETAILS_SUCCESS,
        payload: response,
      }
    },
   setbankAccDetailsFailure: response => {
      return{
        type: constants.SET_BANK_ACC_DETAILS_FAILURE,
        payload: response,
      }
    },
    clearUserDetails: params => {
      return {
        type: constants.CLEAR_USER_DETAILS,
        payload: params
      }
    }
  };
  
  export const initialState = {
    personDetails: null,
    isLoading: false,
    signUpDetails: null,
    email:null,
    userDetails: null,
    bankAccList: null,
    isbankLoading: false,
  };
  
  export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.SET_PROFILE_DATA:
          return {
            ...state,
            personDetails: {...state.personDetails, ...action.payload},
          }
          case constants.SIGN_UP_DETAILS:
            return {
              ...state, signUpDetails: action.payload, 
              isLoading: true,
            };
          case constants.SIGN_UP_DETAILS_SUCCESS:
            return {
              ...state, signUpDetails: action.payload,
              isLoading: false,
            };
          case constants.SIGN_UP_DETAILS_FAILURE:
            return {
              ...state, personDetails: [], isLoading: false,
            };
            case constants.SET_ADDRESS_DETAILS:
              return {
                ...state,personDetails: action.payload, 
                isLoading: true,
              };
            case constants.SET_ADDRESS_DETAILS_SUCCESS:
              return {
                ...state, signUpDetails: action.payload,
                isLoading: false,
              };
            case constants.SET_ADDRESS_DETAILS_FAILURE:
              return {
                ...state, signUpDetails: [], isLoading: false,
              };
              case constants.SET_DOCUMENT_TYPE:
              return {
                ...state,personDetails: action.payload, 
                isLoading: true,
              };
            case constants.SET_DOCUMENT_TYPE_SUCCESS:
              return {
                ...state, personDetails: action.payload,
                isLoading: false,
              };
            case constants.SET_DOCUMENT_TYPE_FAILURE:
              return {
                ...state, personDetails: [], isLoading: false,
              };
              case constants.SIGN_IN_DETAILS:
              return {
                email: {...state.email, ...action.payload},
                isLoading: true,
              };
            case constants.SIGN_IN_DETAILS_SUCCESS:
              return {
                ...state, signUpDetails: action.payload,
                isLoading: false,
              };
            case constants.SIGN_IN_DETAILS_FAILURE:
              return {
                ...state, signUpDetails: [], isLoading: false,
              };
            case constants.VERIFY_OTP_SUCCESS:
              return {
                ...state, userDetails: action.payload.data
              }
            case constants.VERIFY_OTP_FAILURE:
              return {
                ...state, userDetails: null
              }
            case constants.CLEAR_USER_DETAILS:
              return {
                ...state, userDetails: null
              }
            case constants.GET_BANK_ACC_DETAILS:
              return {
                ...state, isbankLoading: true
              }
            case constants.GET_BANK_ACC_DETAILS_SUCCESS:
              return {
                ...state, bankAccList: action.payload.data.bank_accounts, isbankLoading: false
              }
            case constants.GET_BANK_ACC_DETAILS_FAILURE:
              return {
                ...state, bankAccList: null, isbankLoading: false
              }
      default:
        return state;
    }
  };
  
  export default actions;
  