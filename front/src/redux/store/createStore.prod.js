import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from '../middlewares/promiseMiddleware';
import rootReducer from '../reducers';

export default (data) => {
    let finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
    return finalCreateStore(rootReducer, data);
};
