import React from 'react';
import renderer from 'react-test-renderer';
import FormField from './FormField';

describe('<FormField />', () => {
  it('should render the form field component', () => {
    const wrapper = renderer.create(<FormField id="" />);
    expect(wrapper).toMatchSnapshot();
  });
});
