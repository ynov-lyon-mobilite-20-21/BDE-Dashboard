import { request } from "./WebService";
import Config from "../config";
import store from "../store";

const getProductById = async id =>
  await request({
    url: `${Config.baseUrl}/products/${id}`,
    method: "DELETE",
    bearerToken: store.getters.getToken
  });

const deleteProductById = async id =>
  await request({
    url: `${Config.baseUrl}/products/${id}`,
    method: "DELETE",
    bearerToken: store.getters.getToken
  });

const createProduct = async params =>
  await request({
    url: `${Config.baseUrl}/products/`,
    method: "POST",
    body: { ...params }
  });

const updateProduct = async ({ _id, ...params }) =>
  await request({
    url: `${Config.baseUrl}/products/admin/${_id}`,
    method: "PUT",
    bearerToken: store.getters.getToken,
    body: { ...params }
  });

const getProducts = async () =>
  request({
    url: `${Config.baseUrl}/products`,
    method: "GET",
    bearerToken: store.getters.getToken
  });

export {
  getProductById,
  getProducts,
  deleteProductById,
  createProduct,
  updateProduct
};
