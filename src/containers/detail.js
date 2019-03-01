import { connect } from 'react-redux';
import Detail from '../pages/detail';
import * as detailActions from '../redux/actions/detail';

function mapStateToProps (state) {
    let data = state['detail'];
    return {
        ...data
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchOne: (id) => dispatch(detailActions.fetchOne(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
