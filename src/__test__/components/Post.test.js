
/* Test class for Post Component */

import React from 'react';

/* This is bare minimum requirement for using Enzyme for testing */
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
Enzyme.configure({ adapter: new EnzymeAdapter() });


import { shallow, mount, render } from 'enzyme';
import { Post } from '../../Post';
import configureStore from 'redux-mock-store';
import TestUtils from 'react-dom/test-utils';

/* creating a mock store to replication redux store concept in testing. Thsi will act as a source of truth of our testing.*/
const mockStore = configureStore();


describe('Post Component', () => {
	let wrapper;
	let store;

	/* creating initial state of our application for testing */
	const initialState = [{title:'random title', message:'random message', id:'random id'}];

	/* Creating a dummy callback function for testing event handlers. Jest provides a way to spy on named methods from components */
	const myFnProp = jest.fn();

	/* passing initial state to the store */
	store = mockStore(initialState)

	const props = {
		post: store,
		id: initialState[0].id
	}
	let dispatchedAction;
	let expectedAction =  { type: 'DELETE_POST'}

	/* created a dummy dispatch function. This is required because dispatch won't be availabe during shallow testing or unit testing of the compoent. Dispatch is available during integration testing where we test multiple components working together. */
	let dispatchMock = jest.fn();

	beforeEach(() => {

		wrapper = mount(<Post post={props.post} dispatch={dispatchMock} />);

	});

	it('should render without throwing an error', () => {
		expect(wrapper.exists()).toBe(true)
	});

	it('renders a post title', () => {
		expect(wrapper.find('.post_title').length).toEqual(1);

	})

	it('renders a post message', () => {
		expect(wrapper.find('.post_message').length).toEqual(1)
	})

	it('renders 5 control buttons', () => {
		expect(wrapper.find('.control-buttons > button').length).toEqual(5)
	})

	it('calls dispatch on button clicked', () => {
		wrapper.find('button .delete').simulate('click');
		expect(dispatchMock).toHaveBeenCalled();

	})
});

















