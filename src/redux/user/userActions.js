import { usersType } from "./userTypes";
import axios from "axios";

export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({
          type: usersType.FETCH_USER_SUCCESS,
          payload: response.data,
        });
        return response;
      })
      .catch((error) => {
        dispatch({ type: usersType.FETCH_USER_ERROR, payload: error });
      });
  };
};
