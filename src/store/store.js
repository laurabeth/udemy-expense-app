import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { expensesReducer, filtersReducer } from "../reducers";
import thunk from "redux-thunk";

// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const useStore = () => {
  const store = createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};

export default useStore;
