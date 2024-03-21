import axios from "axios";

export const validateUser = async (username, password) => {
  try {
    const response = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password
    })
    return response.data;
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