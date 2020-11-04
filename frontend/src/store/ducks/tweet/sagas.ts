import {call, put, takeEvery} from 'redux-saga/effects'
import {setTweetData, setTweetDataLoadingState} from "./actionCreators";
import {TweetsApi} from '../../../services/api/tweetsApi';
import {LoadingState} from "./contracts/state";
import {IFetchTweetDataAction, TweetDataActionsType} from "./contracts/actionType";
import {ITweet} from "../tweets/contracts/state";

export function* fetchTweetDataSaga({ payload : id} : IFetchTweetDataAction) {
    try {
        const items: ITweet[] = yield call(TweetsApi.fetchTweetData, id);
        yield put(setTweetData(items[0]));
    } catch (e) {
        yield put(setTweetDataLoadingState(LoadingState.ERROR));
    }
}

export function* tweetSags() {
    yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataSaga)
}