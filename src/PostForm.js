import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {reset} from 'redux-form';


export class PostForm extends Component {

	constructor(props) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.onChangeTitle = this.onChangeTitle.bind(this);
	    this.onChangeContent = this.onChangeContent.bind(this);
	    this.getTitle;
	    this.getMessage;
	  }


	onChangeTitle = (e) => {
		// e.preventDefault();
		this.getTitle = e.target.value;
	}

	onChangeContent = (e) => {
		// e.preventDefault();
		this.getMessage = e.target.value;
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// const title = this.getTitle.value;
		// const message = this.getMessage.value;
		const data = {
			id: new Date(),
			'title':this.getTitle,
			'message':this.getMessage,
			editing: false,
			voteCount: 0
		}

		this.props.dispatch({
			type: 'ADD_POST',
			data
		})

		/* This has been reset so that after every succesful submit the form should be refreshed to enter new post */
		// this.getTitle = '';
		// this.getMessage = '';
		// this.props.dispatch(reset('create-post-form'));
	}
	render() {
		return (
		<div className="post-container">
			<h1 className="post_heading">Create Post</h1>
			<form name="create-post-form" className="form" onSubmit={this.handleSubmit} >
				<input name="title" required type="text" ref={(input) => this.getTitle = input}
						placeholder="Enter Post Title" onChange={this.onChangeTitle} /><br /><br />
				<textarea name="content" required rows="5" ref={(input) => this.getMessage = input}
						cols="28" placeholder="Enter Post" onChange={this.onChangeContent} /><br /><br />
				<button>Post</button>
			</form>
		</div>
		);
	}
}
export default connect()(PostForm);