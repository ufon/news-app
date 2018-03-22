import fetch from 'isomorphic-fetch';

import { REQUEST_NEWS, RECEIVE_NEWS, CLEAR_FEED, END_NEWS, API_URL, PAGE_SIZE, API_KEY } from 'constants/ActionTypes';

import { paginationReset } from 'actions/pagination';

const requestNews = () => ({
  type: REQUEST_NEWS,
});

const receiveNews = news => ({
  type: RECEIVE_NEWS,
  payload: news,
});

const endNews = () => ({
  type: END_NEWS,
});

const clearFeed = () => ({
  type: CLEAR_FEED,
});

const clearAction = () => dispatch => {
  dispatch(clearFeed());
  dispatch(paginationReset());
};

const fetchNewsByQuery = (page, query = '') => dispatch => {
  if (page === 1) dispatch(clearAction());
  dispatch(requestNews());
  return fetch(`${API_URL}/everything?q=${query}&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(news => (news.articles.length === 0 ? dispatch(endNews()) : dispatch(receiveNews(news.articles))));
};

const fetchNews = page => dispatch => {
  if (page === 1) dispatch(clearAction());
  dispatch(requestNews());
  return fetch(`${API_URL}/top-headlines?country=ru&pageSize=${PAGE_SIZE}&page=${page}&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(news => (news.articles.length === 0 ? dispatch(endNews()) : dispatch(receiveNews(news.articles))));
};

export { fetchNews, fetchNewsByQuery };
