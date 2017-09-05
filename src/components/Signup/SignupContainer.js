import { connect } from 'react-redux';
import { createAccount } from '../../actions/account';
import Signup from './Signup';

function mapDispatchToProps(dispatch) {
  return {
    createAccount: data => dispatch(createAccount(data)),
  };
}

export default connect(null, mapDispatchToProps)(Signup);
