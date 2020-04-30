const URL = `https://reveal-app.com/backend/api/auth/token/verify//`;

export const tokenCheckFunction = async data => {
  const headers = new Headers({
    "Content-Type": "application/json"
  });

  const tokenData = {
    token: data
  };

  const config = {
    method: "POST",
    body: JSON.stringify(tokenData),
    headers
  };

  const apiInformation = await fetch(URL, config).then(res => res.ok);

  if (!apiInformation) {
    return false;
  } else {
    return true;
  }
};
