import { combineReducers } from 'redux';
import postReducer from './postReducer';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
	postReducer,
	visibilityFilter
})