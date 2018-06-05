
import React, { Component } from 'react';
import { connect } from 'react-redux';


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

