import {AddFormState, ITweet, ITweetState, LoadingState} from "./contracts/state";
import {TweetActionsType, ISetTweetAction, IFetchAddTweetAction, IAddTweetAction, IFetchTweetAction, ISetTweetsLoadingStateAction, ISetAddFormStateAction} from "./contracts/actionsTypes";


export const setTweets = (payload: ITweetState["items"]): ISetTweetAction => ({
    type: TweetActionsType.SET_TWEETS,
    payload
});

export const fetchAddTweet = (payload: string): IFetchAddTweetAction => ({
    type: TweetActionsType.FETCH_ADD_TWEET,
    payload
});

export const AddTweet = (payload: ITweet): IAddTweetAction => ({
    type: TweetActionsType.ADD_TWEET,
    payload
});

export const fetchTweets = (): IFetchTweetAction => ({
    type: TweetActionsType.FETCH_TWEETS,
});

export const setTweetsLoadingState = (payload: LoadingState): ISetTweetsLoadingStateAction => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload
});

export const setAddFormState = (payload: AddFormState): ISetAddFormStateAction => ({
    type: TweetActionsType.SET_ADD_FORM_STATE,
    payload
});

export type TweetsAction =
    ISetTweetAction |
    IFetchTweetAction |
    ISetTweetsLoadingStateAction |
    IFetchAddTweetAction |
    IAddTweetAction |
    ISetAddFormStateAction;