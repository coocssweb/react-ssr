import * as detailActionTypes from '../constants/detail';
// import Immutable from 'immutable';

const initialState = {
    loading: false,
    movie: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case detailActionTypes.DETAIL_FETCH_REQUEST:
            return Object.assign({}, state, { loading: true });
        case detailActionTypes.DETAIL_FETCH_SUCCESS:
            return Object.assign({}, state, { loading: false }, { movie: action.result.movie });
        case detailActionTypes.DETAIL_FETCH_ERROR:
            return Object.assign({}, state, { loading: false });
        default:
            return state;
    }
};