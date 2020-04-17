import { request } from "./WebService";
import Config from "../config";
import store from "../store";

const deleteImageById = async id =>
    await request({
        url: `${Config.baseUrl}/images/${id}`,
        method: "DELETE",
        bearerToken: store.getters.token
    });

const createImage = async params =>
    await request({
        url: `${Config.baseUrl}/images/`,
        method: "POST",
        body: { ...params },
        bearerToken: store.getters.token
    });

const getImages = async () =>
    request({
        url: `${Config.baseUrl}/images`,
        method: "GET",
        bearerToken: store.getters.token
    });

export { getImages, deleteImageById, createImage };
