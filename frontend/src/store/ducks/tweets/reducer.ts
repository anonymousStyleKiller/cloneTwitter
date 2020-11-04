import produce, {Draft} from 'immer';
import {TweetsAction} from './actionCreators';
import {AddFormState, ITweetState, LoadingState} from './contracts/state';
import {TweetActionsType} from "./contracts/actionsTypes";

const initialTweetsState: ITweetState = {
    items: [],
    addFormState: AddFormState.NEVER,
    loadingState: LoadingState.NEVER
};

export const tweetsReducer = produce((draft: Draft<ITweetState>, action: TweetsAction) => {
    switch (action.type) {
        case TweetActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TweetActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.loadingState = LoadingState.LOADING;
            break;

        case TweetActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;

        case TweetActionsType.SET_ADD_FORM_STATE:
            draft.addFormState = action.payload;
            break;

        case TweetActionsType.FETCH_ADD_TWEET:
            draft.addFormState = AddFormState.LOADING;
            break;

        case TweetActionsType.ADD_TWEET:
            draft.items.push(action.payload);
            draft.addFormState = AddFormState.NEVER;
            break;

        default:
           break;
    }
}, initialTweetsState);


