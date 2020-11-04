import {all} from "redux-saga/effects";
import {tagsSags} from "./ducks/tags/sagas";
import {tweetSags} from "./ducks/tweet/sagas";
import {tweetsSags} from "./ducks/tweets/sagas";

export default function* rootSaga() {
    yield all([
        tagsSags(),
        tweetSags(),
        tweetsSags(),
    ])
}