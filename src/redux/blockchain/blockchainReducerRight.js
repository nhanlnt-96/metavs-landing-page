const initialState = {
  loading: false,
  account: null,
  smartContract: null,
  web3: null,
  errorMsg: "",
};

const blockchainReducerRight = (state = initialState, action) => {
  switch (action.type) {
    case "CONNECTION_REQUEST_RIGHT":
      return {
        ...initialState,
        loading: true,
      };
    case "CONNECTION_SUCCESS_RIGHT":
      return {
        ...state,
        loading: false,
        account: action.payload.account,
        smartContract: action.payload.smartContract,
        web3: action.payload.web3,
      };
    case "CONNECTION_FAILED_RIGHT":
      return {
        ...initialState,
        loading: false,
        errorMsg: action.payload,
      };
    case "UPDATE_ACCOUNT_RIGHT":
      return {
        ...state,
        account: action.payload.account,
      };
    default:
      return state;
  }
};

export default blockchainReducerRight;
