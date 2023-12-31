import { BUY_CAKE } from "./cakeTypes";

const initialState = {
  cakeCount: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        cakeCount: state.cakeCount - action.payload,
      };
    default:
      return state;
  }
};

export default reducer;