// log
import store from "../store";

const fetchDataRequestLeft = () => {
  return {
    type: "CHECK_DATA_REQUEST_LEFT",
  };
};

const fetchDataSuccessLeft = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS_LEFT",
    payload: payload,
  };
};

const fetchDataFailedLeft = (payload) => {
  return {
    type: "CHECK_DATA_FAILED_LEFT",
    payload: payload,
  };
};

export const fetchDataLeft = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequestLeft());
    try {
      let totalSupply = await store
        .getState()
        .blockchainLeft.smartContract.methods.totalSupply()
        .call();
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      dispatch(
        fetchDataSuccessLeft({
          totalSupply,
          // cost,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailedLeft("Could not load data from contract."));
    }
  };
};
