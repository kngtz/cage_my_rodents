import axios from "axios";

import { GET_USERS, DELETE_USER, ADD_USER } from "./types";

// GET USERS
export const getUsers = () => dispatch => {
  axios
    .get("/api/users/")
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE USER
export const deleteUser = id => dispatch => {
  axios
    .delete(`/api/users/${id}/`)
    .then(res => {
      dispatch(createMessage({ deleteUser: "User Deleted" }));
      dispatch({
        type: DELETE_USER,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD USER
export const addUser = user => dispatch => {
  axios
    .post("/api/users/", user)
    .then(res => {
      dispatch({
        type: ADD_USER,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
