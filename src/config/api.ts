import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDg5ZTk4YTYxODRmODY4MDg2YTNhMjQ1YzYxMDM0MyIsInN1YiI6IjVmYzA4N2RkOWY1MWFmMDA0MWU4NmFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5sMKhzuF3hJbgn_ccRGEwYvARWn8ZpDdQTssvrX6hWk',
  },
});
export default api;
