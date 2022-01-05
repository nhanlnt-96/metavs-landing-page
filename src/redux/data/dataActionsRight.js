// log
import store from "../store";

const fetchDataRequestRight = () => {
  return {
    type: "CHECK_DATA_REQUEST_RIGHT",
  };
};

const fetchDataSuccessRight = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS_RIGHT",
    payload: payload,
  };
};

const fetchDataFailedRight = (payload) => {
  return {
    type: "CHECK_DATA_FAILED_RIGHT",
    payload: payload,
  };
};

export const fetchDataRight = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequestRight());
    try {
      let totalSupply = await store
        .getState()
        .blockchainRight.smartContract.methods.totalSupply()
        .call();
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      dispatch(
        fetchDataSuccessRight({
          totalSupply,
          // cost,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailedRight("Could not load data from contract."));
    }
  };
};
