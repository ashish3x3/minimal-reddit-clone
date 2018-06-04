import React, { Component } from 'react';
import { connect } from 'react-redux';


export class EditComponent extends Component {
	constructor(props) {
	    super(props);
	    this.handleEdit = this.handleEdit.bind(this);
	    this.onChangeTitle = this.onChangeTitle.bind(this);
	    this.onChangeContent = this.onChangeContent.bind(this);
	    this.newTitle;
	    this.newMessage;
	  }


	onChangeTitle = (e) => {
		// e.preventDefault();
		this.newTitle = e.target.value;
	}

	onChangeContent = (e) => {
		// e.preventDefault();
		this.newMessage = e.target.value;
	}

	handleEdit = (e) => {
		e.preventDefault();
		// const newTitle = this.getTitle.value;
		// const newMessage = this.getMessage.value;
		const data = {
			'newTitle':this.newTitle,
			'newMessage':this.newMessage
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