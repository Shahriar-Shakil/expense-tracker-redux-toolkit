import axios from "../../utils/axios";

export const getTransactions = async ({
  search,
  type,
  limit = 5,
  page = 1,
}) => {
  let queryString = "";
  if (type?.length > 0) {
    if (type === "all") queryString = "";
    else {
      queryString += `&type=${type}`;
    }
  }
  if (search?.length > 0) {
    queryString += `&q=${search}`;
  }
  if (page) {
    queryString += `&_page=${page}`;
  }

  const response = await axios.get(
    `/transactions?_limit=${limit}${queryString}`
  );

  return { data: response.data, total: response.headers?.["x-total-count"] };
};

export const addTransaction = async (data) => {
  const response = await axios.post("/transactions", data);

  return response.data;
};

export const editTransaction = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);

  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = axios.delete(`/transactions/${id}`);

  return response.data;
};
