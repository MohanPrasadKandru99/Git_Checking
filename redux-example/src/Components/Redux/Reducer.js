const count = 0;
function Reducer(state = count, action) {
  const { type } = action;
  switch (type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
}

export default Reducer;
