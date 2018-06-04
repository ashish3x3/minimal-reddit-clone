

import postReducer from '../../reducers/postReducer';


describe('Request Reducer', () => {

	it('has a default empty state', () => {
		expect(
			postReducer(undefined, {type: 'unexpected'})
			).toEqual([]);
	});

	it('should handle ADD_POST', () => {
		const addPostAction = {
		      type: 'ADD_POST',
		      data: {
		      	id: 'new Date()',
		      	title: 'random title',
		      	message:'random text',
		      	editing: false,
		      	voteCount: 0
		      }
		    };

	    expect(
	      postReducer([], addPostAction)
	      ).toEqual([
			      {
			        id: 'new Date()',
    		      	title: 'random title',
    		      	message:'random text',
    		      	editing: false,
    		      	voteCount: 0
			      }
	    ])
	});

	it('should handle DELETE_POST', () => {
		const currentState = [{
						        id: 'new Date()',
			    		      	title: 'random title',
			    		      	message:'random text',
			    		      	editing: false,
			    		      	voteCount: 0
		      				}];
		const addDeleteAction = {
		      type: 'DELETE_POST',
		      id: 'new Date()'
		    };

	    expect(
	      postReducer(currentState, addDeleteAction)
	      ).toEqual([])
	});

	it('should handle EDIT_POST', () => {
		const currentState = [{
						        id: 'new Date()',
			    		      	title: 'random title',
			    		      	message:'random text',
			    		      	editing: false,
			    		      	voteCount: 0
		      				}];
		const addEditAction = {
		      type: 'EDIT_POST',
		      id: 'new Date()'
		    };

	    expect(
	      postReducer(currentState, addEditAction)
	      ).toEqual([
			      {
			        id: 'new Date()',
    		      	title: 'random title',
    		      	message:'random text',
    		      	editing: true,
    		      	voteCount: 0
			      }
	    ])
	});

	it('should handle UPDATE', () => {
		const currentState = [{
						        id: 'new Date()',
			    		      	title: 'random title',
			    		      	message:'random text',
			    		      	editing: true,
			    		      	voteCount: 0
		      				}];
		const updatedPostData = {
			newTitle: 'random title Updated',
			newMessage:'random text Updated'
		}
		const updatedPost = {
			id: 'new Date()',
			title: 'random title Updated',
			message:'random text Updated',
			editing: false,
			voteCount: 0
		}
		const addUpdateAction = {
		      type: 'UPDATE',
		      id: 'new Date()',
		      data: updatedPostData
		    };
	    expect(
	      postReducer(currentState, addUpdateAction)
	      ).toEqual([
			      updatedPost
	    ])
	});

	it('should handle UPVOTE', () => {
		const currentState = [{
						        id: 'new Date()',
			    		      	title: 'random title',
			    		      	message:'random text',
			    		      	editing: false,
			    		      	voteCount: 0
		      				}];
		const upVoteddPost = {
			id: 'new Date()',
			title: 'random title',
			message:'random text',
			editing: false,
			voteCount: 1
		}
		const addUpVoteAction = {
		      type: 'UPVOTE',
		      id: 'new Date()',
		    };
	    expect(
	      postReducer(currentState, addUpVoteAction)
	      ).toEqual([
			      upVoteddPost
	    ])
	});

	it('should handle DOWNVOTE', () => {
		const currentState = [{
						        id: 'new Date()',
			    		      	title: 'random title',
			    		      	message:'random text',
			    		      	editing: false,
			    		      	voteCount: 11
		      				}];
		const downVotedPost = {
			id: 'new Date()',
			title: 'random title',
			message:'random text',
			editing: false,
			voteCount: 10
		}
		const addDownVoteAction = {
		      type: 'DOWNVOTE',
		      id: 'new Date()',
		    };
	    expect(
	      postReducer(currentState, addDownVoteAction)
	      ).toEqual([
			      downVotedPost
	    ])
	});
});
