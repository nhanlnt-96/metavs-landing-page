// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import { fetchDataLeft } from "../data/dataActionsLeft";

const connectRequestLeft = () => {
  return {
    type: "CONNECTION_REQUEST_LEFT",
  };
};

const connectSuccessLeft = (payload) => {
  return {
    type: "CONNECTION_SUCCESS_LEFT",
    payload: payload,
  };
};

const connectFailedLeft = (payload) => {
  return {
    type: "CONNECTION_FAILED_LEFT",
    payload: payload,
  };
};

const updateAccountRequestLeft = (payload) => {
  return {
    type: "UPDATE_ACCOUNT_LEFT",
    payload: payload,
  };
};

export const connectLeft = () => {
  return async (dispatch) => {
    dispatch(connectRequestLeft());
    const abiResponse = await fetch("/config/abiLeft.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/configLeft.json", {
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
            connectSuccessLeft({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccountLeft(accounts[0]));
          });
          ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailedLeft(`Change network to ${CONFIG.NETWORK.NAME}.`));
        }
      } catch (err) {
        dispatch(connectFailedLeft("Something went wrong."));
      }
    } else {
      dispatch(connectFailedLeft("Install Metamask."));
    }
  };
};

export const updateAccountLeft = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequestLeft({ account: account }));
    dispatch(fetchDataLeft(account));
  };
};
