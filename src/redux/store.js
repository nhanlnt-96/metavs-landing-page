import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import dataReducerLeft from "./data/dataReducerLeft";
import blockchainReducerLeft from "./blockchain/blockchainReducerLeft";
import blockchainReducerRight from "./blockchain/blockchainReducerRight";
import dataReducerRight from "./data/dataReducerRight";

const rootReducer = combineReducers({
  blockchainLeft: blockchainReducerLeft,
  blockchainRight: blockchainReducerRight,
  dataLeft: dataReducerLeft,
  dataRight: dataReducerRight
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};

const store = configureStore();

export default store;
