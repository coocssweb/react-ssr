/**
 * Created by coocss on 2019/2/28.
 */
import * as detailActionTypes from '../constants/detail';
import demoApi from '../../api/demo';

export const fetchOne = () => {
    return {
        type: [detailActionTypes.DETAIL_FETCH_REQUEST, detailActionTypes.DETAIL_FETCH_SUCCESS, detailActionTypes.DETAIL_FETCH_ERROR],
        promise: () => {
            return demoApi.fetchDetail();
        }
    };
};
