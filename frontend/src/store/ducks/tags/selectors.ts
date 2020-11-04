import {IRootState} from "../../store";
import {ITagsState, LoadingState} from "./contracts/state";

export const selectTags = (state: IRootState): ITagsState => state.tags;

export const selectTagsItems = (state: IRootState) => selectTags(state).items;

export const selectLoadingState = (state: IRootState): LoadingState => selectTags(state).loadingState;

export const selectTagsLoading = (state: IRootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectTagsLoaded = (state: IRootState): boolean => selectLoadingState(state) === LoadingState.LOADED;


