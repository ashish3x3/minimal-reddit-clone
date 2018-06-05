import React, { Component } from 'react';
import { connect } from 'react-redux';

export class PostForm extends Component {

	constructor(props) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this._onKeyPress = this._onKeyPress.bind(this);
	  };

	_onKeyPress = (e) => {
	  	if(e.target.value.length > 9) {
	  		alert('Content text should not exceed 256 character');
	  	}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const title = this.getTitle.value;
		const message = this.getMessage.value;
		const data = {
			id: new Date(),
			title,
			message,
			editing: false,
			voteCount: 0
		}

		this.props.dispatch({
			type: 'ADD_POST',
			data
		})

		this.getTitle.value = '';
		this.getMessage.value = '';
	}
	render() {
		return (
		<div className="post-container">
			<h1 className="post_heading">Create Post</h1>
			<form className="form" onSubmit={this.handleSubmit} >
				<input required type="text" ref={(input) => this.getTitle = input}
						placeholder="Enter Post Title" /><br /><br />
				<textarea maxLength="256" required rows="5" ref={(input) => this.getMessage = input}
						cols="28" placeholder="Enter Post" onKeyPress={this._onKeyPress} /><br /><br />
				<button>Post</button>
			</form>
		</div>
		);
	}
}
export default connect()(PostForm);