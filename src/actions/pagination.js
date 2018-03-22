import { PAGINATION_RESET, PAGINATION_INCREMENT } from 'constants/ActionTypes';

const paginationReset = () => ({
  type: PAGINATION_RESET,
});

const paginationIncrement = () => ({
  type: PAGINATION_INCREMENT,
});

const pageNext = () => dispatch => {
  dispatch(paginationIncrement());
  return Promise.resolve();
};

export { pageNext, paginationReset };
