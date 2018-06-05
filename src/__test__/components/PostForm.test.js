
/* Test class for PostForm Component */

import React from 'react';

/* This is bare minimum requirement for using Enzyme for testing */

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow, mount, render } from 'enzyme';
import { PostForm }  from '../../PostForm';
import configureStore from 'redux-mock-store';
import TestUtils from 'react-dom/test-utils';

/* creating a mock store to replication redux store concept in testing. Thsi will act as a source of truth of our testing.*/
const mockStore = configureStore();

describe('PostForm Component', () => {
	let wrapper;
	let store;

	/* creating initial state of our application for testing. Since we will be testing adding a topic also.Initial state is left empty to replicate that the memory currently has no data */
	const initialState = [];
	store = mockStore(initialState)

	const props = {
		post: store,
	}
	let dispatchedAction;
	let expectedAction =  { type: 'ADD_POST'};

	/* created a dummy dispatch function. This is required because dispatch won't be availabe during shallow testing or unit testing of the compoent. Dispatch is available during integration testing where we test multiple components working together. */
	let dispatchMock = jest.fn();

	beforeEach(() => {

		wrapper = shallow(<PostForm store = {store} dispatch={dispatchMock}/>);

	});

	it('form should render without crashing', () => {
		expect(wrapper.find('.post-container').length).toEqual(1);
	})

	it('form should have form element', () => {
		expect(wrapper.find('form').length).toEqual(1);
	})

	it('form should have input', () => {
		expect(wrapper.find('input').length).toEqual(1);
	})

	it('form should have textarea', () => {
		expect(wrapper.find('textarea').length).toEqual(1);
	})

	it('form should have button', () => {
		expect(wrapper.find('button').length).toEqual(1);
	})
});
