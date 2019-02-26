import * as demoActionTypes from '../constants/demo';
import demoApi from '@api/demo';

export const fetchOne = () => {
    return {
        type: [demoActionTypes.DEMO_FETCH_REQUEST, demoActionTypes.DEMO_FETCH_SUCCESS, demoActionTypes.DEMO_FETCH_ERROR],
        promise: () => {
            return demoApi.fetchOne();
        }
    };
};
