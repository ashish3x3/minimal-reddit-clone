import React, { Component } from 'react';
import { connect } from 'react-redux';


/* This component is responsible for the displaying the form tot he user to create topics. It also displays a submit button which when clicked triggers ADD_TOPIC(in our case in ADD_POST) to the reducer.postReducer*/
export class PostForm extends Component {

	/* constructor binds two methods to this instance*/
	constructor(props) {
	    super(props);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this._onKeyPress = this._onKeyPress.bind(this);
	  };

	  /* This function will check after each text inserted inside textarea so that user should not be able to enter more than 255 characters. TextArea ahs been provided with maxLength attruabute which does this work but this handler in case of a falllback if any browser version dosen't supports maxLength attribute*/
	_onKeyPress = (e) => {
	  	if(e.target.value.length > 255) {
	  		alert('Content text should not exceed 256 character');
	  	}
	}

	/* This takes care of the dispatching the ADD_TOPIC event for the reducers which then will insert the sent data tot he existing store and re-renders the screen with new changes */
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

		/* Setting these values to empty string so that after every succesful submission of the topic the form should get refreshed for handling new entries. If we use redux-form which does this out of the box but in our case we have used uncontrolled components so we need to take care of such things in code ourselves.*/
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