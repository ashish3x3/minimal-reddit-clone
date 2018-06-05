import React, { Component } from 'react';
import { connect } from 'react-redux';

/* This component is used to disply the topics for editing once someone clicks on edit topic on the screen. It enables the variable editing:true in the state of the topic in context.*/
export class EditComponent extends Component {

	/* Constrcutor is responsible for binding all these mentioned function to this instance.*/
	constructor(props) {
	    super(props);
	    this.handleEdit = this.handleEdit.bind(this);
	    this.onChangeTitle = this.onChangeTitle.bind(this);
	    this.onChangeContent = this.onChangeContent.bind(this);
	    this.newTitle;
	    this.newMessage;
	  }

	  /* on change hadler for title change*/
	onChangeTitle = (e) => {
		this.newTitle = e.target.value;
	}
	/* on change handler for content change*/
	onChangeContent = (e) => {
		this.newMessage = e.target.value;
	}

	/* handle edit is called on submit of the update form. It checks if any new data has been entered for title or content. If it finds that the data is indeed modified it replaces the earlier data with the new one and dispacth the UPDATE event.*/
	handleEdit = (e) => {
		e.preventDefault();
		const data = {
			'newTitle':this.newTitle || this.props.post.title,
			'newMessage':this.newMessage || this.props.post.message
		}

		this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
	}

	render() {
		return (
		<div key={this.props.post.id} className="post">
			<form className="form" onSubmit={this.handleEdit}>
				<input required type="text" ref={(input) => this.getTitle = input}
						name="title" defaultValue={this.props.post.title} placeholder="Enter Post Title"
						onChange={this.onChangeTitle} /><br /><br />
				<textarea required rows="5" ref={(input) => this.getMessage = input}
						name="content" defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" onChange={this.onChangeContent}  /><br /><br />
				<button>Update</button>
			</form>
		</div>
		);
	}
}
export default connect()(EditComponent);