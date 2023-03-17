import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CoinReducer from "./CoinReducer";

const store = createStore(CoinReducer, applyMiddleware(thunk));

export default store;