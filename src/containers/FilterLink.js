import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../Link';

/* This component is used to set Filters like show_all, show_top20 posts,etc. It makes sure that our app an any point is in one of the filter state. Bydefault our app is is show_all state which means that it will default display alll the topics in the system in any order.*/
const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)