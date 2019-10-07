import { combineReducers, createStore } from "redux";
import { expensesReducer, filtersReducer } from "../reducers";

const useStore = () => {
  const store = createStore(combineReducers({ expenses: expensesReducer, filters: filtersReducer }));
  return store;
};

export default useStore;
