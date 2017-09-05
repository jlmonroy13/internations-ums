import React from 'react';
import renderer from 'react-test-renderer';
import EmptySection from './EmptySection';

describe('<EmptySection />', () => {
  it('should render the empty section component', () => {
    const setMenuState = jest.fn();
    const wrapper = renderer.create(
      <EmptySection type="" setMenuState={setMenuState} isMenuOpen={true} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
