import {getUsers} from "../types";
import { BACKEND_URL } from "../../constants.js"

export const usersSearchAction = users => {
  return {
    type: getUsers,
    payload: users
  }
};

const URL = `${BACKEND_URL}users/`;

export const UsersSearchFunction = () => async dispatch => {
    const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem('token')
    });

    const config = {
        method: "GET",
        headers
    };

    const response = await fetch(URL, config);
    const users = await response.json();
    dispatch(usersSearchAction(users));
};