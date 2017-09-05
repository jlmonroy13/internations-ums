import { connect } from 'react-redux';
import EditMode from './EditMenu';
import { setEditMode } from '../../actions/events';
import { deleteGroup } from '../../actions/group';
import { deleteUser } from '../../actions/user';

function mapStateToProps(state) {
  const { events: { editMode }, authorization: { uid: uId } } = state;

  return {
    editMode,
    uId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setEditMode: isActive => dispatch(setEditMode(isActive)),
    deleteGroup: (uId, groupId) => dispatch(deleteGroup(uId, groupId)),
    deleteUser: (uId, userId, groupsIds) => dispatch(deleteUser(uId, userId, groupsIds)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMode);
