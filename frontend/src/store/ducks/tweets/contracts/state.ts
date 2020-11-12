export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export enum AddFormState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface ITweet {
    _id: string;
    text: string;
    createdAt: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export interface ITweetState {
    items: ITweet[];
    loadingState: LoadingState;
    addFormState: AddFormState;
}