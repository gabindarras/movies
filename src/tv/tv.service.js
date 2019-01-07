import axios from 'axios';
import { TV } from '../utils/url';
import { API_KEY } from '../utils/constants';

export function getPopularTVShow() {
  return axios.get(`${TV}/popular`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getUpcomingTVShow() {
  return axios.get(`${TV}/upcoming`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getTopRatedTVShow() {
  return axios.get(`${TV}/top_rated`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getTVShowDetails(id) {
  return axios.get(`${TV}/${id}`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getTVShowCredits(id) {
  return axios.get(`${TV}/${id}/credits`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getSimilarTVShow(id) {
  return axios.get(`${TV}/${id}/similar`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}
