// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import {fetchDataRight} from "../data/dataActionsRight";

const connectRequestRight = () => {
  return {
    type: "CONNECTION_REQUEST_RIGHT",
  };
};

const connectSuccessRight = (payload) => {
  return {
    type: "CONNECTION_SUCCESS_RIGHT",
    payload: payload,
  };
};

const connectFailedRight = (payload) => {
  return {
    type: "CONNECTION_FAILED_RIGHT",
    payload: payload,
  };
};

const updateAccountRequestRight = (payload) => {
  return {
    type: "UPDATE_ACCOUNT_RIGHT",
    payload: payload,
  };
};

export const connectRight = () => {
  return async (dispatch) => {
    dispatch(connectRequestRight());
    const abiResponse = await fetch("/config/abiRight.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/configRight.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const CONFIG = await configResponse.json();
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    if (metamaskIsInstalled) {
      Web3EthContract.setProvider(ethereum);
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await ethereum.request({
          method: "net_version",
        });
        if (networkId == CONFIG.NETWORK.ID) {
          const SmartContractObj = new Web3EthContract(
            abi,
            CONFIG.CONTRACT_ADDRESS
          );
          dispatch(
            connectSuccessRight({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccountRight(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailedRight(`Change network to ${CONFIG.NETWORK.NAME}.`));
        }
      } catch (err) {
        dispatch(connectFailedRight("Something went wrong."));
      }
    } else {
      dispatch(connectFailedRight("Install Metamask."));
    }
  };
};

export const updateAccountRight = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequestRight({ account: account }));
    dispatch(fetchDataRight(account));
  };
};
