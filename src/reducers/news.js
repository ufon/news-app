import { REQUEST_NEWS, RECEIVE_NEWS } from 'constants/ActionTypes';

const initialState = {
  isFetching: true,
  items: [],
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_NEWS:
      return {
        ...state,
        isFetching: false,
        items: [...state.items, ...action.payload],
      };
    default:
      return state;
  }
}
