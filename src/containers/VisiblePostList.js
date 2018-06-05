

import { connect } from 'react-redux'
import AllPost from '../AllPost';
import { VisibilityFilters } from '../actions'

const getVisiblePosts = (posts, filter) => {
  switch (filter) {
    	case VisibilityFilters.SHOW_ALL:
    		console.log('posts SHOW_ALL ',posts);
      		return posts
    	case VisibilityFilters.SHOW_TOP20:
    		console.log('posts SHOW_TOP20 ',posts);
    		console.log(posts.sort((a, b) => a.voteCount < b.voteCount).slice(0, 3));
      		return posts.sort((a, b) => a.voteCount < b.voteCount).slice(0, 3);
    	case VisibilityFilters.SHOW_CURRENT:
      		return posts // posts.filter(t => !t.completed)
    	default:
      		throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
	posts: getVisiblePosts(state.postReducer, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
	//toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps)(AllPost)