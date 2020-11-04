import produce, {Draft} from 'immer';
import {TagsActionsType, TagsAction} from './actionCreators';
import {ITagsState, LoadingState} from './contracts/state';

const initialTagsState: ITagsState = {
    items: [],
    loadingState: LoadingState.NEVER
};

export const tagsReducer = produce((draft: Draft<ITagsState>, action: TagsAction) => {
    switch (action.type) {
        case TagsActionsType.SET_TAGS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TagsActionsType.FETCH_TAGS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;

        case TagsActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        default:
           break;
    }
}, initialTagsState);


