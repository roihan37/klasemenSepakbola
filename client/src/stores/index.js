import { createStore, combineReducers, applyMiddleware } from 'redux';
import { clubReducer } from './reducer/clubReducer';
import thunk from 'redux-thunk';
import { matchReducer } from './reducer/matchReducer';

const rootReducer = combineReducers({
  clubs: clubReducer,
  matches : matchReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
