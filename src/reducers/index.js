import { combineReducers } from 'redux';

import news from './news';
import pagination from './pagination';

export default combineReducers({ news, pagination });
