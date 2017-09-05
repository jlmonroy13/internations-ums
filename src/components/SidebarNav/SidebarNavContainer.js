import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SidebarNav from './SidebarNav';
import { logout } from '../../actions/account';

function mapStateToProps(state) {
  const { routing: { locationBeforeTransitions: { pathname } }, events: { isNavOpen } } = state;
  const url = pathname.substring(1);

  return {
    url,
    isNavOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNav);
