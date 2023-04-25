import axios from 'axios';

const axios_proxy = axios.create({
  baseURL: `http://localhost:3000/api/users/`
  // baseURL: `${process.env.REACT_APP_BASE_URL}/api/users/`
});

export const getUserById = async (id: number) => {
  // axios_proxy.defaults.headers["Authorization"] = `Bearer ${cookie.parse(document.cookie).access_token}`
  try {
    if (id) return await axios_proxy.get(`/getById?id=${id}`)
    else throw new Error("id is empty")
  } catch (e) {
    console.log(e)
  }
}