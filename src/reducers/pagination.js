import { PAGINATION_RESET, PAGINATION_INCREMENT } from 'constants/ActionTypes';

const initialState = {
  page: 1,
};

export default function pagination(state = initialState, action) {
  switch (action.type) {
    case PAGINATION_RESET:
      return {
        page: 1,
      };
    case PAGINATION_INCREMENT:
      return {
        page: state.page + 1,
      };
    default:
      return state;
  }
}
