import { request } from "./WebService";
import Config from "../config";
import store from "../store";

const getMe = async () =>
    await request({
        url: `${Config.baseUrl}/me`,
        method: "GET",
        bearerToken: store.state.auth.token
    });

const getUserById = async userId =>
    await request({
        url: `${Config.baseUrl}/users/${userId}`,
        method: "GET",
        bearerToken: store.state.auth.token
    });

const deleteUserById = async userId =>
    await request({
        url: `${Config.baseUrl}/users/${userId}`,
        method: "DELETE",
        bearerToken: store.state.auth.token
    });

const createUser = async mail =>
    await request({
        url: `${Config.baseUrl}/users/`,
        method: "POST",
        body: {
            mail
        }
    });

const updateUser = async user => {
    const { _id, ...userParams } = user;

    return await request({
        url: `${Config.baseUrl}/users/admin/${_id}`,
        method: "PUT",
        bearerToken: store.state.auth.token,
        body: { ...userParams }
    });
};

const activeUser = async (userId, activationKey, password) =>
    await request({
        url: `${Config.baseUrl}/users/active`,
        method: "POST",
        body: { userId, activationKey, password }
    });

const getUsers = async () =>
    await request({
        url: `${Config.baseUrl}/users`,
        method: "GET",
        bearerToken: store.state.auth.token
    });

export {
    getUserById,
    getUsers,
    deleteUserById,
    createUser,
    activeUser,
    updateUser,
    getMe
};
