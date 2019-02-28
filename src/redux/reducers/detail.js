import * as detailActionTypes from '../constants/detail';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
    loading: false,
    movie: {}
});

export default (state = initialState, action) => {
    switch (action.type) {
        case detailActionTypes.DETAIL_FETCH_REQUEST:
            return state;
        case detailActionTypes.DETAIL_FETCH_SUCCESS:
            return state;
        case detailActionTypes.DETAIL_FETCH_ERROR:
            return state;
        default:
            return state;
    }
};