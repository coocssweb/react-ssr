import { connect } from 'react-redux';
import Home from '../pages/home';
import * as homeActions from '../redux/actions/home';

function mapStateToProps (state) {
    let data = state['home'];
    return {
        ...data
    };
}

function mapDispatchToProps (dispatch) {
    return {
        fetchHome: () => dispatch(homeActions.fetchHome())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
