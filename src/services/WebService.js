const request = async ({
  url = null,
  method = "GET",
  bearerToken = null,
  body = null
}) => {
  const headers = {
    "Content-Type": "application/json"
  };

  if (bearerToken) {
    headers["Authorization"] = `Bearer ${bearerToken}`;
  }

  const requestParams = {
    method,
    timeout: 5000,
    headers
  };

  if (body) {
    requestParams.body = JSON.stringify(body);
  }

  return await fetch(url, requestParams);
};

export { request };
