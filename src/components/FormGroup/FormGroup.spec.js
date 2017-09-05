import React from 'react';
import renderer from 'react-test-renderer';
import FormGroup from './FormGroup';

describe('<FormGroup />', () => {
  it('should render the form group component', () => {
    const createGroup = jest.fn();
    const wrapper = renderer.create(<FormGroup createGroup={createGroup} />);
    expect(wrapper).toMatchSnapshot();
  });
});
