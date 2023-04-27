// In this index.js we combine the reducers

import { combineReducers } from 'redux';
import news from './newsReducer';

const appReducers = combineReducers({
	news
});

export default appReducers;