import { connect } from 'react-redux';
import { deleteUserFromGroup } from '../../actions/group';
import { deleteGroupFromUser } from '../../actions/user';
import ListItem from './ListItem';

function mapDispatchToProps(dispatch) {
  return {
    deleteGroupFromUser: (contactId, groupId) => dispatch(deleteGroupFromUser(contactId, groupId)),
    deleteUserFromGroup: (groupId, contactId) => dispatch(deleteUserFromGroup(groupId, contactId)),
  };
}

export default connect(null, mapDispatchToProps)(ListItem);
