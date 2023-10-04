import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  iceCreamCount: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        iceCreamCount: state.iceCreamCount - 1,
      };
    default:
      return state;
  }
};


export default reducer;