import axios from "axios";

const url = "http://localhost:2000/api/v1/items";
const urlTwo = "http://localhost:2000/api/v1/items/filter";
const urlThree = "http://localhost:2000/api/v1/items/ask";
const urlFour = "http://localhost:2000/api/v1/items/modal";
const urlFive = "http://localhost:2000/api/v1/items/account-items";
const urlSix = "http://localhost:2000/api/v1/items/account-asked";
const urlSeven = "http://localhost:2000/api/v1/items/bookmarked";
const urlEight = "http://localhost:2000/api/v1/items/delete-single-item";
const urlTen = "http://localhost:2000/api/v1/items/bookmarked-account";
const urlEleven = "http://localhost:2000/api/v1/items/single-ask-item";
const urlTwelve = "http://localhost:2000/api/v1/items/account-offered-edit";
const urlThirteen = "http://localhost:2000/api/v1/items/account-asked-edit";
const urlFourteen = "http://localhost:2000/api/v1/items/delete-all-account-data"

export const fetchAllItems = async () => {
  return axios.get(url);
};
export const postSingleItem = async (item) => {
  return axios.post(url, item);
};

export const filteredQuery = async (params) => {
  return axios.get(urlTwo, { params: params });
};

export const postAskItem = (askItem) => {
  return axios.post(urlThree, askItem);
};

export const getSingleItem = async (id) => {
  return axios.get(urlFour, { params: id });
};
export const getSingleItemAsk = async (id) => {
  return axios.get(urlEleven, { params: id });
};

export const getAccountItems = async (_uid) => {
  return axios.get(urlFive, { params: _uid });
};
export const getAccountItemsAsked = async (_uid) => {
  return axios.get(urlSix, { params: _uid });
};

export const addBookmark = async (bookmark) => {
  return axios.put(urlSeven, bookmark);
};
export const deleteSingleItem = async (id) => {
  return axios.delete(urlEight, {data: {_id:id}});
};

export const getAccountBookmarked = async (uid) => {
  return axios.get(urlTen, { params: uid });
};

export const editAccountOffered = async (data) => {
  return axios.put(urlTwelve, data);
};

export const editAccountAsked = async (data) => {
  return axios.put(urlThirteen, data);
};

export const deleteAllAccountData = async (id) => {
  return axios.delete(urlFourteen, {data: {uid:id}});
};
