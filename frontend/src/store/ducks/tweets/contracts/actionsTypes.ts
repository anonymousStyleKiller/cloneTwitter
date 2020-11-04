import {Action} from "redux";
import {AddFormState, ITweet, ITweetState, LoadingState} from "./state";

export enum TweetActionsType {
    SET_TWEETS = 'TWEETS/SET_TWEETS',
    FETCH_TWEETS = 'TWEETS/FETCH_TWEETS',
    SET_LOADING_STATE = 'TWEETS/SET_LOADING_STATE',
    FETCH_ADD_TWEET = 'TWEETS/FETCH_ADD_TWEET',
    ADD_TWEET = 'TWEETS/ADD_TWEET',
    SET_ADD_FORM_STATE = 'TWEETS/SET_ADD_FORM_STATE',
}

export interface ISetTweetAction extends Action<TweetActionsType> {
    type: TweetActionsType.SET_TWEETS;
    payload: ITweetState['items'];
}

export interface IFetchAddTweetAction extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_ADD_TWEET;
    payload: string;
}

export interface IAddTweetAction extends Action<TweetActionsType> {
    type: TweetActionsType.ADD_TWEET;
    payload: ITweet;
}

export interface IFetchTweetAction extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_TWEETS;
}

export interface ISetTweetsLoadingStateAction extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export interface ISetAddFormStateAction extends Action<TweetActionsType> {
    type: TweetActionsType.SET_ADD_FORM_STATE;
    payload: AddFormState;
}