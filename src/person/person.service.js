import axios from 'axios';
import { PERSON } from '../utils/url';
import { API_KEY } from '../utils/constants';

export function getPopularPerson() {
  return axios.get(`${PERSON}/popular`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getPersonDetails(id) {
  return axios.get(`${PERSON}/${id}`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getPersonTVShowCredits(id) {
  return axios.get(`${PERSON}/${id}/tv_credits`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}

export function getPersonMoviesCredits(id) {
  return axios.get(`${PERSON}/${id}/movie_credits`, { params: { api_key: API_KEY, language: 'fr-FR' } });
}
