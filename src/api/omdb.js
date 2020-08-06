import axios from 'axios';

const API_KEY = 'a08b3b11';

export default axios.create({
  baseURL: `https://www.omdbapi.com/?apikey=${API_KEY}&`
});
