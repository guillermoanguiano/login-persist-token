import axios from "axios";

export const getProducts = async (limit, skip = 0) => {
  try {
    const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.error("Error 400: Bad Request");
      return { error: true, message: "Bad Request" };
    } else {
      console.error("Error:", error.message);
      return { error: true, message: error.message };
    }
  }
}