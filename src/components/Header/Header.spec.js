import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

describe('<Account />', () => {
  it('should render the header component', () => {
    const wrapper = renderer.create(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
