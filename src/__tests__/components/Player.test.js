import React from 'react';
import Player from '../../components/Player';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player location={{state: {name: 'Prueba'}}} />);
});

it('renders the player', () => {
  const wrapper = shallow(<Player location={{state: {name: 'Prueba'}}} />);
  expect(wrapper.find(".playerbox").length).toBe(0);

  
  wrapper.setState({ songs: [{ _id: "1", name: "Song 1" }, { _id: "2", name: "Song 2" }]});
  expect(wrapper.find(".player").length).toBe(2);
});

it('renders suggestions', () => {
  const wrapper = shallow(<Player location={{state: {songs: [{_id: "1", name: "Song 1"}]}}} />);
  expect(wrapper.containsMatchingElement(<h2>Escucha estas sugerencias...</h2>)).toBeTruthy();
});
