const initialState = {
  loading: false,
  account: null,
  smartContract: null,
  web3: null,
  errorMsg: "",
};

const blockchainReducerLeft = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST_LEFT":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECTION_SUCCESS_LEFT":
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        smartContract: action.payload.smartContract,
        web3: action.payload.web3,
      };
    case "CONNECTION_FAILED_LEFT":
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case "UPDATE_ACCOUNT_LEFT":
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
};

export default blockchainReducerLeft;
