import {IRootState} from "../../store";
import {ITweetState, LoadingState, AddFormState} from "./contracts/state";

export const selectTweetsState = (state: IRootState): ITweetState => state.tweets;

export const selectTweetsItems = (state: IRootState) => selectTweetsState(state).items;

export const selectAddFormState = (state: IRootState): AddFormState => selectTweetsState(state).addFormState;

export const selectLoadingState = (state: IRootState): LoadingState => selectTweetsState(state).loadingState;

export const selectTweetsLoading = (state: IRootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetsLoaded = (state: IRootState): boolean => selectLoadingState(state) === LoadingState.LOADED;


