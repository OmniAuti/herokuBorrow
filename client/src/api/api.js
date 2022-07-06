import axios from "axios";

const url = "http://localhost:2000/api/v1/items";
const urlTwo = "http://localhost:2000/api/v1/items/filter";

export const fetchAllItems = async () => {
  return axios.get(url).catch((err) => console.log(err));
};

export const postSingleItem = async (item) => {
  return axios.post(url, item);
};

export const filteredQuery = async (params) => {
  return axios.get(urlTwo, {params: params}).catch(err => console.log(err))
}

