import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import app from 'reducers';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    app,
    router: routerReducer,
  }),
  composeEnhancer(applyMiddleware(middleware, thunk))
);

export { store, history };
