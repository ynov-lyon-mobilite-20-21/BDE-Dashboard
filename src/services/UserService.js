import { request } from "./WebService";
import Config from "../config";
import store from "../store";

const me = async () =>
  await request({
    url: `${Config.baseUrl}/me`,
    method: "GET",
    bearerToken: store.getters.token
  });

const getUserById = async id =>
  await request({
    url: `${Config.baseUrl}/users/${id}`,
    method: "GET",
    bearerToken: store.getters.token
  });

const deleteUserById = async id =>
  await request({
    url: `${Config.baseUrl}/users/${id}`,
    method: "DELETE",
    bearerToken: store.getters.token
  });

const createUser = async mail =>
  await request({
    url: `${Config.baseUrl}/users/`,
    method: "POST",
    body: { mail }
  });

const updateUser = async ({ _id, ...userParams }) =>
  await request({
    url: `${Config.baseUrl}/users/admin/${_id}`,
    method: "PUT",
    bearerToken: store.getters.token,
    body: { ...userParams }
  });

const activeUser = async (userId, activationKey, password) =>
  await request({
    url: `${Config.baseUrl}/users/activation`,
    method: "POST",
    body: { userId, activationKey, password }
  });

const getUsers = async () =>
  await request({
    url: `${Config.baseUrl}/users`,
    method: "GET",
    bearerToken: store.getters.token
  });

export {
  getUserById,
  getUsers,
  deleteUserById,
  createUser,
  activeUser,
  updateUser,
  me
};
