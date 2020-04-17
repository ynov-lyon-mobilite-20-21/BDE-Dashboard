import { request } from "./WebService";
import Config from "../config";

const authenticateUser = async (mail, password) => {
    const result = await request({
        url: `${Config.baseUrl}/auth`,
        method: "POST",
        body: { mail, password }
    });

    try {
        const { token, refreshToken } = result;

        if (!token || !refreshToken) {
            return false;
        }

        return { token, refreshToken };
    } catch (e) {
        console.log(e);
        return false;
    }
};

export { authenticateUser };
