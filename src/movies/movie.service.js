import axios from 'axios';
import { MOVIE } from '../utils/url';
import { API_KEY } from '../utils/constants';

export function getPopularMovies() {
  return axios.get(`${MOVIE}/popular`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getUpcomingMovies() {
  return axios.get(`${MOVIE}/upcoming`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getTopRatedMovies() {
  return axios.get(`${MOVIE}/top_rated`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getMovieDetails(id) {
  return axios.get(`${MOVIE}/${id}`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getMovieCredits(id) {
  return axios.get(`${MOVIE}/${id}/credits`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getSimilarMovies(id) {
  return axios.get(`${MOVIE}/${id}/similar`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}
