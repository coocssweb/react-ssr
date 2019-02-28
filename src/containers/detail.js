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
        fetch: () => {
            return dispatch(detailActions.fetchOne());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
