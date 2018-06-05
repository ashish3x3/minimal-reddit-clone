

/* ALl the visibilty filters we are supporting in our system*/
export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_TOP20: 'SHOW_TOP20',
	SHOW_MY_POST: 'SHOW_MY_POST'
}

/* Action creator for dispatching filters*/
export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})