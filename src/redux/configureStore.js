import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../sagas';
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              shouldHotReload: false,
          })
        : compose;
const configureStore = () => {
    const middlewares = [thunk,sagaMiddleware];
    const enhances = [applyMiddleware(...middlewares)];
    const store = createStore(rootReducer, composeEnhancers(...enhances));
    sagaMiddleware.run(rootSaga)
    return store;
};
export default configureStore;
