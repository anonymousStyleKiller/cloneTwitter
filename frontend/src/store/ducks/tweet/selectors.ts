import {IRootState} from "../../store";
import {ITweetState, LoadingState} from "./contracts/state";

export const selectTweet = (state: IRootState): ITweetState => state.tweet;

export const selectTweetItems = (state: IRootState): ITweetState["data"] => selectTweet(state).data;

export const selectLoadingState = (state: IRootState): LoadingState => selectTweet(state).loadingState;

export const selectTweetLoading = (state: IRootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetLoaded = (state: IRootState): boolean => selectLoadingState(state) === LoadingState.LOADED;


