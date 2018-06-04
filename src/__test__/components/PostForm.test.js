import React from 'react';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-15');
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { shallow, mount, render } from 'enzyme';
import { PostForm }  from '../../PostForm';
import configureStore from 'redux-mock-store';
import TestUtils from 'react-dom/test-utils';

const mockStore = configureStore();

describe('PostForm Component', () => {
	let wrapper;
	let store;

	const initialState = [];
	store = mockStore(initialState)

	const props = {
		post: store,
	}
	let dispatchedAction;
	let expectedAction =  { type: 'ADD_POST'}
	let dispatchMock = jest.fn();

	beforeEach(() => {

		wrapper = shallow(<PostForm store = {store} dispatch={dispatchMock}/>);

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

	    wrapper.find('input').simulate('change', changeEventTitle);
	    wrapper.find('textarea').simulate('change', changeEventContent);
	    console.log(wrapper.find('textarea').props);

		wrapper.find('.form').simulate('submit',{preventDefault() {}});
		expect(dispatchMock).toHaveBeenCalled();
	});

	//  // it('handleEdit function should get called on form submit', () => {
	// 	// wrapper.find('.form').simulate('submit',{preventDefault() {}});
	// 	// expect(dispatchMock).toHaveBeenCalled();

	// });

	// it('form should get rendered without crash', () => {
	// 	expect(wrapper.find('.post').length).toEqual(1)
	// })

	// it('form should have input field', () => {
	// 	expect(wrapper.find('input').length).toEqual(1)
	// })

	// it('form should have button', () => {
	// 	expect(wrapper.find('button').length).toEqual(1)
	// })

	// it('default value of title should be props.post.title', () => {
	// 	const erp = wrapper.find('input').prop('defaultValue');
	// 	expect(erp).toEqual(props.post.title);

	// })

	// it('default value of content should be props.post.message', () => {
	// 	const erp = wrapper.find('textarea').prop('defaultValue');
	// 	expect(erp).toEqual(props.post.message);

	// })
});
