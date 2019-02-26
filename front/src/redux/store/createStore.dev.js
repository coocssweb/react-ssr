import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from '../middlewares/promiseMiddleware';
import RootReducer from '../reducers';
import DevTool from '@containers/devTool';

export default (data) => {
    const enhancer = compose(
        applyMiddleware(
            promiseMiddleware
        ),
        DevTool.instrument()
    );

    let finalCreateStore = enhancer(createStore);

    return finalCreateStore(RootReducer, data);
};
