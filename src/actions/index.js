

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_TOP20: 'SHOW_TOP20',
	SHOW_CURRENT: 'SHOW_CURRENT'
}

export const setVisibilityFilter = filter => ({
	type: 'SET_VISIBILITY_FILTER',
	filter
})