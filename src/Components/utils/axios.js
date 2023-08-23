// import axios from "axios";

import axios from "axios"

const axiosInstance = axios.create({
  // Server url
  baseURL: 'https://book-shop-rho-blush.vercel.app/'
})

export default axiosInstance