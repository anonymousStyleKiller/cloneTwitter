import {ITweet} from "../../tweets/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}


export interface ITweetState {
    data?: ITweet;
    loadingState: LoadingState;
}