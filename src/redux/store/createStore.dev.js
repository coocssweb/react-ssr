import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from '../middlewares/promiseMiddleware';
import RootReducer from '../reducers';

export default (data) => {
    const enhancer = compose(
        applyMiddleware(
            promiseMiddleware
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        // DevTool.instrument()
    );

    let finalCreateStore = enhancer(createStore);

    return finalCreateStore(RootReducer, data);
};
