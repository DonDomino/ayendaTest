import React from 'react';
import Artists from '../../components/Artists';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Artists />);
});

it('renders the artists', () => {
  const wrapper = shallow(<Artists />);
  expect(wrapper.find(".container").length).toBe(0);

  wrapper.setState({ artists: [{ _id: "1", name: "Artist 1" }, { _id: "2", name: "Artist 2" }], loading: false});
  expect(wrapper.find(".artist").length).toBe(2);
});
