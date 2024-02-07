import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
});

export default axiosClient;