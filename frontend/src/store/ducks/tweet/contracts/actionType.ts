import {Action} from "redux";
import {ITweetState, LoadingState} from "./state";

export enum TweetDataActionsType {
    SET_TWEET_DATA = 'TWEET/SET_TWEET_DATA',
    FETCH_TWEET_DATA = 'TWEETS/FETCH_TWEET_DATA',
    SET_LOADING_STATE = 'TWEETS/SET_LOADING_STATE',
}

export interface ISetTweetDataAction extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_TWEET_DATA;
    payload: ITweetState["data"];
}

export interface IFetchTweetDataAction extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.FETCH_TWEET_DATA;
    payload: string;
}

export interface ISetTweetDataLoadingStateAction extends Action<TweetDataActionsType> {
    type: TweetDataActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}
