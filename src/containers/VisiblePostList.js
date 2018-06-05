
/* This act as a Data container which gets the data depending on state and filter and then pass it to AllPost component to display it */
import { connect } from 'react-redux'
import AllPost from '../AllPost';
import { VisibilityFilters } from '../actions'

export const getVisiblePosts = (posts, filter) => {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
	  		return posts;
		case VisibilityFilters.SHOW_TOP20:
	  		return posts.sort((a, b) => a.voteCount < b.voteCount).slice(0, 20);
		case VisibilityFilters.SHOW_MY_POST:
	  		return posts;
		default:
	  		posts;
	}
}

/* Matching states contained inside our store to posts*/
const mapStateToProps = state => ({
	posts: getVisiblePosts(state.postReducer, state.visibilityFilter)
})

export default connect(mapStateToProps)(AllPost)