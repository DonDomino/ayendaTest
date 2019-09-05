import React from 'react';
import Songs from '../../components/Songs';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Songs match={{params: {id: 1}}} />);
});

it('renders the songs', () => {
  const wrapper = shallow(<Songs match={{params: {id: 1}}}/>);
  expect(wrapper.find(".wrapper").length).toBe(0);

  wrapper.setState({ songs: [{ _id: "1", name: "Song 1" }, { _id: "2", name: "Song 2" }], loading: false});
  expect(wrapper.find(".song").length).toBe(2);
});