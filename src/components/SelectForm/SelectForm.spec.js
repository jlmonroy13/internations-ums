import React from 'react';
import renderer from 'react-test-renderer';
import SelectForm from './SelectForm';

describe('<SelectForm />', () => {
  it('should render the select form component', () => {
    const addGroupToUser = jest.fn();
    const addUserToGroup = jest.fn();
    const wrapper = renderer.create(
      <SelectForm
        addGroupToUser={addGroupToUser}
        addUserToGroup={addUserToGroup}
        type=""
        urlId=""
        items={[]}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
