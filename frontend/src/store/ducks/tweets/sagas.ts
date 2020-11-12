import {call, put, takeEvery} from 'redux-saga/effects'
import {AddTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./actionCreators";
import {TweetsApi} from '../../../services/api/tweetsApi';
import {AddFormState, LoadingState} from "./contracts/state";
import {IFetchAddTweetAction, TweetActionsType} from "./contracts/actionsTypes";

export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items));
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* fetchAddTweetRequest({payload: text}: IFetchAddTweetAction) {
    try {
        const item = yield call(TweetsApi.addTweet, text);
        yield put(AddTweet(item));
    } catch (e) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* tweetsSags() {
    yield takeEvery(TweetActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeEvery(TweetActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}