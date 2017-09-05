import { connect } from 'react-redux';
import { createGroup } from '../../actions/group';
import FormGroup from './FormGroup';

function mapDispatchToProps(dispatch) {
  return {
    createGroup: (data, file) => dispatch(createGroup(data, file)),
  };
}

export default connect(null, mapDispatchToProps)(FormGroup);
