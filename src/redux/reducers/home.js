import * as homeActionTypes from '../constants/home';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    loading: false,
    banner: {},
    movies: {}
});

export default (state = initialState, action) => {
    switch (action.type) {
        case homeActionTypes.HOME_FETCH_REQUEST:
            return state;
        case homeActionTypes.HOME_FETCH_SUCCESS:
            return state;
        case homeActionTypes.HOME_FETCH_ERROR:
            return state;
        default:
            return state;
    }
};