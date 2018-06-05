import React from 'react';
import FilterLink from './containers/FilterLink';
import { VisibilityFilters } from './actions';

/* This component will display Filters on the screen. It simply calls FilterLink component to print filters on screen. FilterScreen make use of Link component internally to attach a callback handler to each filters . This display filters for ALL POST, TOP 20 POST and My POSTS*/
export const Filter = () => (
  <div>
  	<div className="filterContainer">
	    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
	      All Post
	    </FilterLink>
	    <FilterLink filter={VisibilityFilters.SHOW_TOP20}>
	      Top 20 Posts
	    </FilterLink>
	    <FilterLink filter={VisibilityFilters.SHOW_MY_POST}>
	      My Posts
	    </FilterLink>
	</div>
  </div>
)