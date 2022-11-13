import axios from 'axios';

const REACT_APP_API_KEY = `6156c956c00552a373a30b2f4ae90c99`;
const BASE_URL = axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingToday = async (url) => {
	const response = await axios.get(`${BASE_URL}${url}`, {
		params: {
			api_key: `${REACT_APP_API_KEY}`,
		}
	})
	return response.data;
};
export const fetchSearchMovies = async (url, query) => {
	const response = await axios.get(`${BASE_URL}${url}`, {
		params: {
			api_key: `${REACT_APP_API_KEY}`,
			query: query,
		}
	})
	return response.data;
};
export const fetchMovieID = async (url) => {
	const response = await axios.get(`${BASE_URL}${url}`, {
		params: {
			api_key: `${REACT_APP_API_KEY}`,
		}
	})
	return response.data;
};
export const fetchMovieIDCredits = async (url) => {
	const response = await axios.get(`${BASE_URL}${url}`, {
		params: {
			api_key: `${REACT_APP_API_KEY}`,
		}
	})
	return response.data;
};

export const fetchMovieIDReviews = async (url) => {
	const response = await axios.get(`${BASE_URL}${url}`, {
		params: {
			api_key: `${REACT_APP_API_KEY}`,
		}
	})
	return response.data;
};



