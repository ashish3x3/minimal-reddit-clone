import { combineReducers } from 'redux';
import postReducer from './postReducer';
import visibilityFilter from './visibilityFilter';

/* using combine reducer from redux which handles both postreducer and visibility filters. Post reducer for the CRUD operation performed on the Topics in memory and visibility filters for the segregation of topics based on selected criteria like show top 20 post based on highest number of upvotes, show my posts only,etc*/
export default combineReducers({
	postReducer,
	visibilityFilter
})