import * as homeActionTypes from '../constants/home';
// import Immutable from 'immutable';

const initialState = {
    loading: false,
    banner: '',
    movies: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case homeActionTypes.HOME_FETCH_REQUEST:
            return Object.assign({}, state, { loading: true });
        case homeActionTypes.HOME_FETCH_SUCCESS:
            const { movies, banner } = action.result;
            return Object.assign({}, state, { loading: false }, { movies, banner });
        case homeActionTypes.HOME_FETCH_ERROR:
            return Object.assign({}, state, { loading: false });
        default:
            return state;
    }
};