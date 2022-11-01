import axios from 'axios';
const API_KEY = '2996ac4c632c41fce1458614a9485a98';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrending = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: { api_key: API_KEY },
  });
  return data;
};

export const getMovieByName = async (query, page = 1) => {
  const { data } = await axios.get('/search/movie', {
    params: { api_key: API_KEY, query, page },
  });
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return data;
};
export const getCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: { api_key: API_KEY },
  });
  return data;
};
export const getReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: { api_key: API_KEY },
  });
  return data;
};
