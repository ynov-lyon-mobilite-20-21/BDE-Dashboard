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

  const result = await fetch(url, requestParams);

  try {
    const obj = await result.json();

    if (!obj) {
      return { success: false };
    }

    return obj;
  } catch (e) {
    console.log(e);
    return { success: false };
  }
};

export { request };
