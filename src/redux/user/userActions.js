import { usersType } from "./userTypes";
import axios from "axios";

const fetchUserRequest = () => {
  return {
    type: usersType.FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: usersType.FETCH_USER_SUCCESS,
    payload: users
  };
};

const fetchUserError = (error) => {
  return {
    type: usersType.FETCH_USER_ERROR,
    payload: error
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserError(error.message));
      });
    // axios.get("https://jsonplaceholder.typicode.com/users").then((response) => console.log(response.data))
  };
};
