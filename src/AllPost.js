import React, { Component } from 'react';
import Post from './Post';
import EditComponent from './EditComponent';

/* This Component simply dumps the data it receive from component VisiblePostList onto screen with help of other components like EditComponent and Post component. It also checks whether the topic is cliked for update or not. In that scenario it prints EditCOmponent onto screen*/
class AllPost extends Component {
	render() {
		return (
		<div>
			<h1 className="post_heading">All Posts</h1>
			{this.props.posts.map((post) => (
				<div key={post.id}>
					{post.editing ? <EditComponent post={post} key={post.id} /> :
									<Post post={post} key={post.id} />}
				</div>
			))}
		</div>
		);
	}
}

export default AllPost;