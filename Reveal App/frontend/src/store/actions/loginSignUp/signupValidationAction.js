import { validation } from "../../types";

const URL = "https://reveal-app.com/backend/api/validation/";

export const validationAction = () => ({
  type: validation
});

export const validationFunction = data => async dispatch => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const config = {
    method: "POST",
    body: JSON.stringify(data),
    headers
  };

  const apiInformation = await fetch(URL, config).then(res => res.ok);

  if (!apiInformation) {
    return false;
  } else {
    dispatch(validationAction());
    return true;
  }
};
