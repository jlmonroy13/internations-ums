import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, isLoaded, isEmpty } from 'react-redux-firebase';
import DetailsPage from './DetailsPage';
import StrUtils from '../../utils/string';

const fbWrappedComponent = firebaseConnect(['/contacts', '/groups'])(DetailsPage);

function mapStateToProps(state) {
  const {
    firebase,
    routing: { locationBeforeTransitions: { pathname } },
    events: { editMode },
  } = state;
  const type = StrUtils.getStringBetween(pathname, '/', '/');
  const id = pathname.slice(type.length + 2);
  const isAnUser = type === 'user';
  const ref = type === 'user' ? `contacts/${id}` : `${type}s/${id}`;
  let data = dataToJS(firebase, ref);
  if (!isLoaded(data)) {
    data = null;
  } else if (isEmpty(data)) {
    data = {};
  }
  return {
    type,
    isAnUser,
    data,
    editMode,
  };
}

export default connect(mapStateToProps, null)(fbWrappedComponent);
