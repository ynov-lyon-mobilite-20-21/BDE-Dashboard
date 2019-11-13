import { request } from "./WebService";
import Config from "../config";

const authenticateUser = async (mail, password) => {
  const result = await request({
    url: `${Config.baseUrl}/auth`,
    method: "POST",
    body: { mail, password }
  });

  try {
    const obj = await result.json();
    const { token, refreshToken, userId } = obj.data;

    if (!token || !refreshToken || !userId) {
      return false;
    }

    return { token, refreshToken, userId };
  } catch (e) {
    console.log(e);
    return false;
  }
};

export { authenticateUser };
