import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    incrementBy,
    type: "INCREMENT",
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    decrementBy,
    type: "DECREMENT",
  };
};

const setCount = ({ count = 0 } = {}) => {
  return {
    count,
    type: "SET",
  };
};

const resetCount = () => {
  return {
    type: "RESET",
  };
};

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

let x = 0;
while (x < 3) {
  store.dispatch(
    incrementCount({
      incrementBy: 5,
    }),
  );
  x++;
}

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 42 }));

unsubscribe();
