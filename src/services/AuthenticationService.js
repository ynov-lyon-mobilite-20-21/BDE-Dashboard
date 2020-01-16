import { request } from "./WebService";
import Config from "../config";

const authenticateUser = async (mail, password) =>
  await request({
    url: `${Config.baseUrl}/auth`,
    method: "POST",
    body: { mail, password }
  });

export { authenticateUser };
