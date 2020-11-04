import {createStore, compose, applyMiddleware} from "redux";
import {rootReducers} from "./rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./saga";
import {ITweetState} from "./ducks/tweets/contracts/state";
import { ITagsState } from "./ducks/tags/contracts/state";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface IRootState {
    tweets:  ITweetState;
    tags: ITagsState;
    tweet: ITweetState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

