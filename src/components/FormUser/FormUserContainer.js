import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, pathToJS, isLoaded, isEmpty } from 'react-redux-firebase';
import { createUser } from '../../actions/user';
import FormUser from './FormUser';

const fbWrappedComponent = firebaseConnect(['/groups'])(FormUser);

function mapStateToProps(state) {
  const { firebase } = state;
  const entitiesGroups = pathToJS(firebase, 'profile/groups');
  let items = dataToJS(firebase, 'groups');
  if (isLoaded(items) && !isEmpty(items) && entitiesGroups) {
    items = Object.keys(entitiesGroups).map(groupId => items[groupId]);
  } else {
    items = [];
  }
  return {
    groups: items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (data, file, groupId) => dispatch(createUser(data, file, groupId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(fbWrappedComponent);
