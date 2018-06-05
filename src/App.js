import React, { Component } from 'react';
import PostForm from './PostForm';
import { Filter } from './Filter';

import VisiblePostList from './containers/VisiblePostList';


class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="navbar">
			    	<h2 className="center ">Minimal Reddit Clone</h2>
				</div>
		  		<Filter />
		  		<PostForm />
		    	<VisiblePostList />
			</div>
		);
	}
}
export default App;