import React from 'react';
import FilterLink from './containers/FilterLink';
import { VisibilityFilters } from './actions';

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