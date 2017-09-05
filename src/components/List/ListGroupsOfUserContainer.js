import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, pathToJS } from 'react-redux-firebase';
import List from './List';
import StrUtils from '../../utils/string';

const fbWrappedComponent = firebaseConnect(['/contacts', '/groups'])(List);

function mapStateToProps(state) {
  const { firebase, routing: { locationBeforeTransitions: { pathname: url } } } = state;
  const contactId = StrUtils.getStringBetween(url.slice(1), '/');
  const ownEntitiesObj = dataToJS(firebase, `contacts/${contactId}/group`);
  const entitiesObj = pathToJS(firebase, 'profile/groups');
  const itemsObj = dataToJS(firebase, 'groups');

  return {
    itemsObj,
    entitiesObj,
    ownEntitiesObj,
    urlId: contactId,
  };
}

export default connect(mapStateToProps)(fbWrappedComponent);
