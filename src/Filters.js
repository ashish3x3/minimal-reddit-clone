
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* This component has been deprecated. It was the first try to build an inline filter which dosen't work the way intended. Leter I moved to adding another reducer to our store same as done by todoApp demo shown on redux.com It has button for all the three filters which on click dispatch action for reducer to take action.*/
class Filters extends Component {

	render() {
		return (
				<div className="filterContainer">
				    <button className="fa fa-list-alt post-control-buttons boxItem"
			        		onClick={() => this.props.dispatch({ type: 'SHOW_ALL'})}>
			    		Show All
			    	</button>

				    <button className="fa fa-arrow-down post-control-buttons boxItem"
			        		onClick={() => this.props.dispatch({ type: 'TOP20'})}>
			    		Top 20 Posts
			    	</button>

				    <button className="fa fa-check post-control-buttons boxItem"
			        		onClick={() => this.props.dispatch({ type: 'TOP5'})}>
			    		Top 5 Posts
			    	</button>
				  </div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state
	}
}

export default connect(mapStateToProps)(Filters);

