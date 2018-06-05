
/* Test class for EditComponent Component*/

import React from 'react';

/* This is bare minimum requirement for using Enzyme for testing */
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow, mount, render } from 'enzyme';
import { EditComponent } from '../../EditComponent';
import configureStore from 'redux-mock-store';
import TestUtils from 'react-dom/test-utils';

/* creating a mock store to replication redux store concept in testing. Thsi will act as a source of truth of our testing.*/
const mockStore = configureStore();

describe('EditComponent Component', () => {
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
	let expectedAction =  { type: 'UPDATE'}

	/* created a dummy dispatch function. This is required because dispatch won't be availabe during shallow testing or unit testing of the compoent. Dispatch is available during integration testing where we test multiple components working together. */
	let dispatchMock = jest.fn();

	beforeEach(() => {

		wrapper = shallow(<EditComponent post={props.post} dispatch={dispatchMock} />);

	});

	it('dispatch should get invoked on form submit', () => {
		const expectedAction = { type: 'UPDATE', id: props.post.id, data: props.post };

		// Simulate typing text into the name input.
	    const title = 'random title';
	    const changeEventTitle = {
	      target: { name: 'getTitle', value: title },
	    };

	    const content = 'random content';
	    const changeEventContent = {
	      target: { name: 'getMessage', value: content },
	    };

	    wrapper.find('input[name="title"]').simulate('change', changeEventTitle);
	    wrapper.find('textarea').simulate('change', changeEventContent);

		wrapper.find('.form').simulate('submit',{preventDefault() {}});
		expect(dispatchMock).toHaveBeenCalled();
	});

	 it('handleEdit function should get called on form submit', () => {
		wrapper.find('.form').simulate('submit',{preventDefault() {}});
		expect(dispatchMock).toHaveBeenCalled();

	});

	it('form should get rendered without crash', () => {
		expect(wrapper.find('.post').length).toEqual(1)
	})

	it('form should have input field', () => {
		expect(wrapper.find('input').length).toEqual(1)
	})

	it('form should have button', () => {
		expect(wrapper.find('button').length).toEqual(1)
	})

	it('default value of title should be props.post.title', () => {
		const erp = wrapper.find('input').prop('defaultValue');
		expect(erp).toEqual(props.post.title);

	})

	it('default value of content should be props.post.message', () => {
		const erp = wrapper.find('textarea').prop('defaultValue');
		expect(erp).toEqual(props.post.message);

	})
});
