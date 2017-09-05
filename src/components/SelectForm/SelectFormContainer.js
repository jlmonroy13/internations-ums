import { connect } from 'react-redux';
import { addGroupToUser } from '../../actions/user';
import { addUserToGroup } from '../../actions/group';
import SelectForm from './SelectForm';

function mapDispatchToProps(dispatch) {
  return {
    addGroupToUser: (contactId, groupId) => dispatch(addGroupToUser(contactId, groupId)),
    addUserToGroup: (groupId, contactId) => dispatch(addUserToGroup(groupId, contactId)),
  };
}

export default connect(null, mapDispatchToProps)(SelectForm);
