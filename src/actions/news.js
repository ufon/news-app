import fetch from 'isomorphic-fetch';

import { REQUEST_NEWS, RECEIVE_NEWS, API_URL } from 'constants/ActionTypes';

const requestCams = () => ({
  type: REQUEST_NEWS,
});

const receiveCams = news => ({
  type: RECEIVE_NEWS,
  payload: news,
});

const fetchNews = page => dispatch => {
  dispatch(requestCams());
  return fetch(`${API_URL}/top-headlines?country=ru&apiKey=a5c408b501784e6795211f05c8b2d304`)
    .then(response => response.json())
    .then(news => dispatch(receiveCams(news.articles)));
};

export { fetchNews };
