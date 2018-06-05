
/* This will act as a state manager for anything we do with topics like creating a topics,editing and deleting.All those operation has to go through this post reducer. This will make sure that our app has predictable data flow and at any point store has the latest value based on any amount of operations perfomed within our app */
const postReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_POST':
			return [...state, action.data]; //state.concat([action.data])
		case 'DELETE_POST':
			return state.filter((post) => post.id !== action.id)
		case 'EDIT_POST':
			return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
		case 'UPDATE':
			return state.map((post) => {
						if (post.id === action.id) {
							return {
								...post,
								title: action.data.newTitle,
								message: action.data.newMessage,
								editing: !post.editing
							}
						} else return post;
						})
		case 'UPVOTE':
			return state.map((post)=>{
			        if(post.id === action.id) {
			          return {
			             ...post,
			             voteCount: post.voteCount + 1
			          }
			        } else return post;
			      })
		case 'DOWNVOTE':
			return state.map((post)=>{
			    	        if(post.id === action.id) {
			    	          return {
			    	             ...post,
			    	             voteCount: post.voteCount - 1
			    	          }
			    	        } else return post;
			    	      })
		default:
			return state;
	}
}
export default postReducer;