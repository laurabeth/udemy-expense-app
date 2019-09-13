import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  const incrementBy =
    typeof action.incrementBy === "number" ? action.incrementBy : 1;
  const decrementBy =
    typeof action.decrementBy === "number" ? action.decrementBy : 1;
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - decrementBy,
      };
    case "RESET":
      return {
        count: 0,
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
  store.dispatch({
    incrementBy: 5,
    type: "INCREMENT",
  });

  x++;
}

store.dispatch({
  type: "RESET",
});

store.dispatch({
  type: "DECREMENT",
});

store.dispatch({
  decrementBy: 10,
  type: "DECREMENT",
});

unsubscribe();
