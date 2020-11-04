export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface ITag {
    _id: string;
    name: string;
    count: number;
}

export interface ITagsState {
    items: ITag[];
    loadingState: LoadingState;
}