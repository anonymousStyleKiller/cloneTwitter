import {call, put, takeEvery} from 'redux-saga/effects'
import {AddTweet, setAddFormState, setTweets, setTweetsLoadingState} from "./actionCreators";
import {TweetsApi} from '../../../services/api/tweetsApi';
import {AddFormState, ITweet, LoadingState} from "./contracts/state";
import {IFetchAddTweetAction, TweetActionsType} from "./contracts/actionsTypes";

export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTweets);
        yield put(setTweets(items));
    } catch (e) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* fetchAddTweetRequest({payload}: IFetchAddTweetAction) {
    try {
        const data: ITweet = {
            "_id": Math.random().toString(36).substr(2),
            "text": payload,
            "user": {
                "fullname": "Володимир Зеленський",
                "username": "@ZelenskyyUa",
                "avatarUrl": "https://pbs.twimg.com/profile_images/1215070700026855425/7edvU72D_200x200.jpg"
            }
        };
        const item = yield call(TweetsApi.addTweet, data);
        yield put(AddTweet(item));
    } catch (e) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* tweetsSags() {
    yield takeEvery(TweetActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeEvery(TweetActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}