import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, pathToJS } from 'react-redux-firebase';
import List from './List';
import StrUtils from '../../utils/string';

const fbWrappedComponent = firebaseConnect(['/contacts', '/groups'])(List);

function mapStateToProps(state) {
  const { firebase, routing: { locationBeforeTransitions: { pathname: url } } } = state;
  const groupId = StrUtils.getStringBetween(url.slice(1), '/');
  const ownEntitiesObj = dataToJS(firebase, `groups/${groupId}/user`);
  const entitiesObj = pathToJS(firebase, 'profile/contacts');
  const itemsObj = dataToJS(firebase, 'contacts');

  return {
    itemsObj,
    entitiesObj,
    ownEntitiesObj,
    urlId: groupId,
  };
}

export default connect(mapStateToProps)(fbWrappedComponent);
