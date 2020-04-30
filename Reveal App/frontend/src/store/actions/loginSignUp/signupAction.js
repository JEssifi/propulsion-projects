import { signup } from "../../types";

export const signupAction = email => ({
  type: signup,
  payload: email
});

const URL = `https://reveal-app.com/backend/api/registration/`;

export const signupFunction = data => async dispatch => {
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
      dispatch(signupAction(data.email));
      return true;
    } else {
      return false;
    }
  });
  if (!apiInformation) {
    return false;
  } else {
    return true;
  }
};
