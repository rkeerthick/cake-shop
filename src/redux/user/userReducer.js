import { usersType } from "./userTypes";
const initialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case usersType.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case usersType.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case usersType.FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;