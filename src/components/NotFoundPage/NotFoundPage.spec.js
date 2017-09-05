import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from './NotFoundPage';

describe('<NotFoundPage />', () => {
  it('should render the not found page component', () => {
    const wrapper = renderer.create(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
