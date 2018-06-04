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

	// it('dispatch should get invoked on form submit', () => {
	// 	const expectedAction = { type: 'UPDATE', id: props.post.id, data: props.post };

	// 	// Simulate typing text into the name input.
	//     const title = 'random title';
	//     const changeEventTitle = {
	//       target: { name: 'getTitle', value: title },
	//     };

	//     const content = 'random content';
	//     const changeEventContent = {
	//       target: { name: 'getMessage', value: content },
	//     };

	//     wrapper.find('input').simulate('change', changeEventTitle);
	//     wrapper.find('textarea').simulate('change', changeEventContent);
	//     console.log(wrapper.find('textarea').props);

	// 	wrapper.find('.form').simulate('submit',{preventDefault() {}});
	// 	expect(dispatchMock).toHaveBeenCalled();
	// });

	//  // it('handleEdit function should get called on form submit', () => {
	// 	// wrapper.find('.form').simulate('submit',{preventDefault() {}});
	// 	// expect(dispatchMock).toHaveBeenCalled();

	// });

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
