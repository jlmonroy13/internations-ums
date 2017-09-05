import { connect } from 'react-redux';
import { firebaseConnect, dataToJS, pathToJS } from 'react-redux-firebase';
import { setMenuState } from '../../actions/events';
import List from './List';

const fbWrappedComponent = firebaseConnect(['/groups', '/profile/groups'])(List);

function mapStateToProps(state) {
  const { firebase, events: { isMenuOpen } } = state;
  const entitiesObj = pathToJS(firebase, 'profile/groups');
  const itemsObj = dataToJS(firebase, 'groups');
  return {
    entitiesObj,
    itemsObj,
    isMenuOpen,
    urlId: '',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setMenuState: state => dispatch(setMenuState(state)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(fbWrappedComponent);
