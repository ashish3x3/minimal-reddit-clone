import { VisibilityFilters } from '../actions';

/* Reducer for our Filters. Bydefault our app is in SHOW_ALL filter which means it will display all the topics in the memory */
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state
	}
};
export default visibilityFilter;

