import { login } from "../../types";
import { getConfigAuthorization } from "../../fetchConfigUrl";

export const loginAction = token => ({
  type: login,
  payload: token
});

const URL = `https://reveal-app.com/backend/api/auth/token/`;
const userURL = `https://reveal-app.com/backend/api/user/`;

export const loginFunction = data => async dispatch => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers
  };

  const apiInformation = await fetch(URL, config).then(res => {
    if (res.ok) {
      res.json().then(data => {
        const { access } = data;
        dispatch(loginAction(access));
        localStorage.setItem("token", access);
      });
      return true;
    } else {
      return false;
    }
  });
  const userApiInformation = await fetch(userURL, getConfigAuthorization).then(
    res => {
      if (res.ok) {
        res.json().then(data => {
          localStorage.setItem("user", JSON.stringify(data));
        });
        return true;
      } else {
        return false;
      }
    }
  );
  if (!apiInformation) {
    return false;
  } else {
    return true;
  }
};
