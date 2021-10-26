import axios from "axios";

export const getTranzactions = async () => {
  return axios({
    url: "http://localhost:3200/Tranzactions/all",
    method: "GET",
  }).catch((error) => {
    console.log(error.response.data.error);
  });
};
export const addNewTranzactions = async (
  categories,
  type_of_operation,
  sum,
  date,
  description
) => {
  return axios({
    url: "http://localhost:3200/Tranzactions/",
    data: {
      categories: categories,
      type_of_operation: type_of_operation,
      sum: sum,
      date: date,
      description: description,
    },
    method: "POST",
  }).catch((error) => {
    console.log(error.response.data.error);
  });
};
export const updateTranzactions = async (
  categories,
  type_of_operation,
  sum,
  date,
  description,
  id
) => {
  return axios({
    url: "http://localhost:3200/Tranzactions/" + id,
    data: {
      categories: categories,
      type_of_operation: type_of_operation,
      sum: sum,
      date: date,
      description: description,
    },
    method: "PUT",
  }).catch((error) => {
    console.log(error.response.data.error);
  });
};
export const deleteTranzactions = async (id) => {
  return axios({
    url: "http://localhost:3200/Tranzactions/" + id,
    method: "DELETE",
  }).catch((error) => {
    console.log(error.response.data.error);
  });
};
