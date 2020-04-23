import { combineReducers, createStore } from "redux";
import { expensesReducer, filtersReducer } from "../reducers";

const useStore = () => {
  const store = createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};

export default useStore;
