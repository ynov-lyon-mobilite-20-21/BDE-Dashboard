import { request } from "./WebService";
import Config from "../config";
import store from "../store";

const getProductById = async id =>
  await request({
    url: `${Config.baseUrl}/products/${id}`,
    method: "GET"
  });

const deleteProductById = async id =>
  await request({
    url: `${Config.baseUrl}/products/${id}`,
    method: "DELETE",
    bearerToken: store.getters.token
  });

const createProduct = async params =>
  await request({
    url: `${Config.baseUrl}/products/`,
    method: "POST",
    body: { ...params },
    bearerToken: store.getters.token
  });

const updateProduct = async ({ _id, ...params }) =>
  await request({
    url: `${Config.baseUrl}/products/${_id}`,
    method: "PUT",
    bearerToken: store.getters.token,
    body: { ...params }
  });

const getProducts = async () =>
  request({
    url: `${Config.baseUrl}/products`,
    method: "GET",
  });

export {
  getProductById,
  getProducts,
  deleteProductById,
  createProduct,
  updateProduct
};
