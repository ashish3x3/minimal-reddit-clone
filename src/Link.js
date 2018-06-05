import React from 'react'

/* This component displays the Filters. This will be used by FilterLink component to display our filter as links on the screen. So when someone clicks on the those links our app wil change its state and so will the data displayed on the screen.*/
const Link = ({ active, children, onClick }) => (
	<button
	 		onClick={onClick}
	 		disabled={active}
	 		className = {active ? 'fa fa-list-alt post-control-buttons boxItem active': 'fa fa-list-alt post-control-buttons boxItem default' }>
		{children}
	</button>
)

export default Link