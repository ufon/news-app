import { REQUEST_NEWS, RECEIVE_NEWS, END_NEWS, CLEAR_FEED } from 'constants/ActionTypes';

const initialState = {
  isEnd: false,
  isFetching: true,
  items: [],
};

export default function news(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return {
        ...state,
        isEnd: false,
        isFetching: true,
      };
    case RECEIVE_NEWS:
      return {
        ...state,
        isFetching: false,
        items: [...state.items, ...action.payload],
      };
    case END_NEWS:
      return {
        ...state,
        isEnd: true,
      };
    case CLEAR_FEED:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
}
