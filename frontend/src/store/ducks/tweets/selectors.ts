import {IRootState} from "../../store";
import {ITweetState, LoadingState, AddFormState} from "./contracts/state";

export const selectTweets = (state: IRootState): ITweetState => state.tweets;

export const selectTweetsItems = (state: IRootState) => selectTweets(state).items;

export const selectAddFormState = (state: IRootState): AddFormState => selectTweets(state).addFormState;

export const selectLoadingState = (state: IRootState): LoadingState => selectTweets(state).loadingState;

export const selectTweetsLoading = (state: IRootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetsLoaded = (state: IRootState): boolean => selectLoadingState(state) === LoadingState.LOADED;


