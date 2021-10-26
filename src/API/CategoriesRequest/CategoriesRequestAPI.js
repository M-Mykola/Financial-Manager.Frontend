import axios from "axios";

export const getCategories = async () => {
  return axios({
    url: "http://localhost:3200/Category/all",
    method: "GET",
  }).catch((error) => {
    console.log(error.response.data.error);
  });
};

export const updateCategories = async (categories, description, id) => {
  return axios({
    url: "http://localhost:3200/Category/" + id,
    data: {
      categories: categories,
      description: description,
    },
    method: "PUT",
  }).catch((error) => {
    console.log(error.response.data.error);
  });
};

export const deleteCategories = async (id) => {
  return axios({
    url: "http://localhost:3200/Category/" + id,
    method: "DELETE",
  }).catch((error) => {
    console.log(error.response.data.error);
  });
};

export const addNewCategories = async (categories, description) => {
  return axios({
    url: "http://localhost:3200/Category/",
    data: {
      categories: categories,
      description: description,
    },
    method: "POST",
  }).catch((error) => {
    console.log(error.response.data.error);
  });
};
