import { connect } from 'react-redux';
import { pathToJS } from 'react-redux-firebase';
import DisplaySection from './DisplaySection';
import StrUtils from '../../utils/string';

function mapStateToProps(state) {
  const { firebase, routing: { locationBeforeTransitions: { pathname } } } = state;
  const type = StrUtils.deleteLastCharacter(pathname.substring(1));
  const contacts = pathToJS(firebase, 'profile/contacts');
  const groups = pathToJS(firebase, 'profile/groups');
  let enableUsers = true;
  if (!contacts && !groups && type === 'user') enableUsers = false;
  const isAnUser = type === 'user';
  return {
    type,
    isAnUser,
    enableUsers,
  };
}

export default connect(mapStateToProps, null)(DisplaySection);
