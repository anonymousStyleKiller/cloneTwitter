import {ITagsState, LoadingState} from "./contracts/state";
import {Action} from "redux";

export enum TagsActionsType {
    SET_TAGS = 'TAGS/SET_TAGS',
    FETCH_TAGS = 'TAGS/FETCH_TAGS',
    SET_LOADING_STATE = 'TAGS/SET_LOADING_STATE',
}

export interface ISetTagsAction extends Action<TagsActionsType> {
    type: TagsActionsType.SET_TAGS;
    payload: ITagsState['items'];
}

export interface IFetchTagsAction extends Action<TagsActionsType> {
    type: TagsActionsType.FETCH_TAGS;
}

export interface ISetTagsLoadingStateAction extends Action<TagsActionsType> {
    type: TagsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export const setTags = (payload: ITagsState["items"]): ISetTagsAction => ({
        type: TagsActionsType.SET_TAGS,
        payload
})

export const fetchTags = (): IFetchTagsAction => ({
    type: TagsActionsType.FETCH_TAGS,
})

export const setTagsLoadingState = (payload: LoadingState): ISetTagsLoadingStateAction => ({
    type: TagsActionsType.SET_LOADING_STATE,
    payload
})

export type TagsAction =
    ISetTagsAction |
    IFetchTagsAction |
    ISetTagsLoadingStateAction;