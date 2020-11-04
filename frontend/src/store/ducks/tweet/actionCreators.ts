import {ITweetState, LoadingState} from "./contracts/state";

import {
    IFetchTweetDataAction,
    ISetTweetDataAction,
    ISetTweetDataLoadingStateAction,
    TweetDataActionsType
} from "./contracts/actionType";

export const setTweetData = (payload: ITweetState["data"]): ISetTweetDataAction => ({
    type: TweetDataActionsType.SET_TWEET_DATA,
    payload
})

export const fetchTweetData = (payload: string): IFetchTweetDataAction => ({
    type: TweetDataActionsType.FETCH_TWEET_DATA,
    payload
})

export const setTweetDataLoadingState = (payload: LoadingState): ISetTweetDataLoadingStateAction => ({
    type: TweetDataActionsType.SET_LOADING_STATE,
    payload
})

export type TweetDataAction =
    ISetTweetDataAction |
    IFetchTweetDataAction |
    ISetTweetDataLoadingStateAction;