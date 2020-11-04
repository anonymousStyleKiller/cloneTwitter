import produce, {Draft} from 'immer';
import {ITweetState, LoadingState} from './contracts/state';
import { TweetDataAction } from './actionCreators';
import { TweetDataActionsType } from './contracts/actionType';

const initialTweetsState: ITweetState = {
    data: undefined,
    loadingState: LoadingState.NEVER
};

export const tweetReducer = produce((draft: Draft<ITweetState>, action: TweetDataAction) => {
    switch (action.type) {
        case TweetDataActionsType.SET_TWEET_DATA:
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TweetDataActionsType.FETCH_TWEET_DATA:
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING;
            break;

        case TweetDataActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
           break;
    }
}, initialTweetsState);


