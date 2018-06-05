import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';


export class AllPost extends Component {

	constructor(props) {
	    super(props);

	    /* This state is local to this component only */
	    this.state = {
	    	currentlyDisplayedPost: this.props.posts
	    };

	    // bindings
	    this.getTopFive = this.getTopFive.bind(this);
	    this.getTopTwenty = this.getTopTwenty.bind(this);
	    this.getAll = this.getAll.bind(this);

	  }

	  // componentDidMount(){
	  // 	let allPosts = [].concat(this.props.posts);
	  // 	this.setState ({
	  // 		currentlyDisplayedPost:allPosts

	  // 	});
	  // }

	  // componentWillMount() {
	  // 	const allPosts = [].concat(this.props.posts);
	  // 	this.setState ({
	  // 		currentlyDisplayedPost:this.props.posts

	  // 	});
	  // }

	  getTopFive = (e) => {
	  	console.log('top 5 called');
	  	const top5Posts = [].concat(this.props.posts).sort((a, b) => a.voteCount > b.voteCount).slice(0, 5);
	  	console.log('top5Posts ',top5Posts);
	  	this.setState ({
	  		currentlyDisplayedPost:top5Posts

	  	});
	  }

	  getTopTwenty = (e) => {
	  	const top20Posts = [].concat(this.props.posts).sort((a, b) => a.voteCount > b.voteCount).slice(0, 20);
	  	this.setState ({
	  		currentlyDisplayedPost:top20Posts,

	  	});
	  }

	  getAll = (e) => {
	  	const allPosts = [].concat(this.props.posts).sort((a, b) => a.voteCount > b.voteCount).slice(0);
	  	this.setState ({
	  		currentlyDisplayedPost:allPosts,

	  	});
	  }

	render() {

		// console.log([].concat(this.props.posts));
		// console.log([].concat(this.props.posts).sort());
		// let top20Posts = [].concat(this.props.posts).sort((a, b) => a.voteCount > b.voteCount);  // this.props.post.filter(post => )  // family.filter(person => person.age > 18);
		// console.log(top20Posts);
		// console.log(top20Posts.slice(0, 3));
		console.log('this.props.posts ',this.props.posts);
		console.log('this.state.currentlyDisplayedPost ',this.state.currentlyDisplayedPost)

		return (
		<div>
			<div className="filterContainer">
			    <button className="fa fa-list-alt post-control-buttons boxItem"
		        		onClick={this.getAll}>
		    		Show All
		    	</button>

			    <button className="fa fa-arrow-down post-control-buttons boxItem"
		        		onClick={this.getTopTwenty}>
		    		Top 20 Posts
		    	</button>

			    <button className="fa fa-check post-control-buttons boxItem"
		        		onClick={this.getTopFive}>
		    		Top 5 Posts
		    	</button>
			  </div>

			<h1 className="post_heading">All Posts</h1>
			{this.props.posts.map((post) => (
				<div key={post.id}>
					{post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post}
				key={post.id} />}
				</div>
			))}
		</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		posts: state.postReducer

	}
}
export default connect(mapStateToProps)(AllPost);