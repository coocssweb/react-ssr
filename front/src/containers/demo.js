import { connect } from 'react-redux';
import Demo from '../pages/demo';
import * as demoActions from '../redux/actions/demo';

function mapStateToProps (state) {
    let demoState = state['demo'];
    return {
        loading: demoState.get('loading'),
        data: demoState.get('data').toJS(),
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetch: () => {
            return dispatch(demoActions.fetchOne());
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Demo);
