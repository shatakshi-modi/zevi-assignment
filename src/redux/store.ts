import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import ShoppingRedux from "./reducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  ShoppingRedux,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
