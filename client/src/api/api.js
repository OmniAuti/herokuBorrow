import axios from "axios";

const url = "http://localhost:2000/api/v1/items";
const urlTwo = "http://localhost:2000/api/v1/items/filter";
const urlThree = "http://localhost:2000/api/v1/items/ask";
const urlFour = "http://localhost:2000/api/v1/items/modal"
const urlFive = "http://localhost:2000/api/v1/items/account-items"
const urlSix = "http://localhost:2000/api/v1/items/account-asked"

export const fetchAllItems = async () => {
  return axios.get(url)
};
export const postSingleItem = async (item) => {
  return axios.post(url, item);
};

export const filteredQuery = async (params) => {
  return axios.get(urlTwo, {params: params})
}

export const postAskItem = (askItem) => {
  return axios.post(urlThree, askItem)
}

export const getSingleItem = async (id) => {
    return axios.get(urlFour, {params: id})
}

export const getAccountItems = async (_uid) => {
  return axios.get(urlFive,  {params: _uid})
}
export const getAccountItemsAsked = async (_uid) => {
  return axios.get(urlSix,  {params: _uid})
}
