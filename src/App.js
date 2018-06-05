import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';
import Filter from './Filter';
import { Footer } from './Footer';

import VisiblePostList from './containers/VisiblePostList';


class App extends Component {
	render() {
		return (
			<div className="App">
			  <div className="navbar">
			    <h2 className="center ">Minimal Reddit Clone</h2>
			  </div>
			  	<PostForm />
			    <VisiblePostList />
			    <Footer />
			</div>
		);
	}
}
export default App;