import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SidebarMenu from './SidebarMenu';
import { setMenuState } from '../../actions/events';

function mapStateToProps(state) {
  const { events: { isMenuOpen } } = state;
  return { isMenuOpen };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMenuState }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
