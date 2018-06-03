import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
	render() {
		return (
			<div className="post">
				<h2 className="post_title">{this.props.post.title}</h2>
				<p className="post_message">{this.props.post.message}</p>

				<div className="control-buttons">
				    <button className="fa fa-pencil-square-o edit"
				        		onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}>
				        	Edit
				    </button>

				    <button className="fa fa-trash delete"
				    		onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>
						Delete
					</button>

				    <button className="fa fa-thumbs-up upvote"
				    		onClick={() => this.props.dispatch({ type: 'UPVOTE', id: this.props.post.id })}>
						Upvote
					</button>

				    <button className="count">
						{this.props.post.voteCount}
					</button>

				    <button className="fa fa-thumbs-down downvote"
				    		onClick={() => this.props.dispatch({ type: 'DOWNVOTE', id: this.props.post.id })}>
						Downvote
					</button>
				</div>
			</div>
			);
	}
}
export default connect()(Post);