import { usersType } from "./userTypes";
const initialState = {
  users: [],
  error: ''
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case usersType.FETCH_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: '',
      };
    case usersType.FETCH_USER_ERROR:
      return {
        ...state,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;