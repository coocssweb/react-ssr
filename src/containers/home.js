import { connect } from 'react-redux';
import Home from '../pages/home';

function mapStateToProps (state) {
    let data = state['home'];
    return {
        ...data
    };
}

function mapDispatchToProps (dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
