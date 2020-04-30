import { logout } from "../../types";

const logoutAction = () => {
  return {
    type: logout
  };
};

export const logoutHandler = () => dispatch => {
  localStorage.clear();
  dispatch(logoutAction());
};
