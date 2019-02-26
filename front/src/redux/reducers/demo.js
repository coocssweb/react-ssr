/**
 * Created by coocss on 2019/2/26.
 */
import * as demoActionTypes from '../constants/demo';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    loading: false,
    data: {}
});

export default (state = initialState, action) => {
    switch (action.type) {
    case demoActionTypes.DEMO_FETCH_REQUEST:
        return state;
    case demoActionTypes.DEMO_FETCH_SUCCESS:
        return state;
    case demoActionTypes.DEMO_FETCH_ERROR:
        return state;
    default:
        return state;
    }
};
