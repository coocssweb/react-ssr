import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from '../middlewares/promiseMiddleware';
import RootReducer from '../reducers';

export default (data) => {
    let enhancer;

    if (process.env.NODE_ENV === 'development') {
        enhancer = compose(
            applyMiddleware(
                promiseMiddleware
            ),
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
            // DevTool.instrument()
        );
    } else {
        enhancer = compose(
            applyMiddleware(
                promiseMiddleware
            )
        );
    }

    let finalCreateStore = enhancer(createStore);

    return finalCreateStore(RootReducer, data);
};
