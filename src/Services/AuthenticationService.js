import { request } from "./WebService";
import Config from "../config";

const authenticateUser = async (mail, password) => {
  const result = await request({
    url: `${Config.baseUrl}/auth`,
    method: 'POST',
    body: { mail, password }
  });

  try {
    const obj = await result.json();
    const { token, refreshToken } = obj.data;

    if (!token || !refreshToken) {
      return false
    }

    return { token, refreshToken };
  } catch (e) {
    console.log(e);
    return false;
  }
};

export { authenticateUser };
