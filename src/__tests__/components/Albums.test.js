import React from 'react';
import Albums from '../../components/Albums';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Albums match={{params: {id: 1}}} />);
});

it('renders the albums', () => {
  const wrapper = shallow(<Albums match={{params: {id: 1}}}/>);
  expect(wrapper.find(".container").length).toBe(0);

  wrapper.setState({ albums: [{ _id: "1", name: "Albums 1" }, { _id: "2", name: "Albums 2" }], loading: false});
  expect(wrapper.find(".album").length).toBe(2);
});