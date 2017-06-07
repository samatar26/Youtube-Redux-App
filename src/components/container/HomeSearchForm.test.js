import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { HomeSearchForm } from './HomeSearchForm';
import App from './../App';

describe('App', () => {
  it('Should add an item on submit', () => {
    // const wrapper = shallow(<HomeSearchForm />);
    // // expect(wrapper.state.term).toEqual(0);
    // const form = wrapper.find('form');
    // expect(form.text().toBe(''));
    // console.log(form);
    // form.simulate('submit', { preventDefault: jest.fn() });
    // expect(wrapper.find(List).props().items.length).toEqual(1);
  });
});
