const acornReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "BUY_ACORN":
      return { ...state, counter: state.counter + action.payload };
    case "EAT_ACORN":
      if (state.counter > 0) {
        return { ...state, counter: state.counter - action.payload };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default acornReducer;
