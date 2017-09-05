import { connect } from 'react-redux';
import { updateGroup } from '../../actions/group';
import DetailsFormGroup from './DetailsFormGroup';

function mapDispatchToProps(dispatch) {
  return {
    updateGroup: (data, file) => dispatch(updateGroup(data, file)),
  };
}

export default connect(null, mapDispatchToProps)(DetailsFormGroup);
