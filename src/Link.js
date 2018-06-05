import React from 'react'

const Link = ({ active, children, onClick }) => (
	<button
	 		onClick={onClick}
	 		disabled={active}
	 		className = {active ? 'fa fa-list-alt post-control-buttons boxItem active': 'fa fa-list-alt post-control-buttons boxItem default' }>
		{children}
	</button>
)

export default Link