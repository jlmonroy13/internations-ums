import React from 'react';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('should render the list item component', () => {
    const data = {
      urlPhoto: '',
      name: '',
      description: '',
      email: '',
      firstName: '',
      lastName: '',
      id: '',
    }
    const wrapper = renderer.create(<ListItem page="" type="" data={data}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
