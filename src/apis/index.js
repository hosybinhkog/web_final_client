import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:4444/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

axiosClient.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosClient
