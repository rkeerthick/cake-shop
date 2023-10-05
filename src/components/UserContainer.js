import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux";

const UserContainer = () => {
  const [userData, setUserData] = useState([]);
  const [userError, setUserError] = useState("");
  const dispatch = useDispatch();

  const { users, error } = useSelector((state) => {
    console.log(state.user.users, 'state');
    return {
      users: state?.user?.users,
      error: state?.user?.error,
    };
  });

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  useEffect(() => {
    setUserData(users);
    setUserError(error);
    console.log(users, "users------>>");
  }, [users, error]);

  return userData?.data <= 0 ? (
    <h2>{userError}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData?.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default UserContainer;
