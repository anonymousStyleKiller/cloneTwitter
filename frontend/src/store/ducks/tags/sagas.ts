import { takeEvery, call, put } from 'redux-saga/effects'
import {setTagsLoadingState, TagsActionsType, setTags} from "./actionCreators";
import { TagsApi } from '../../../services/api/tagsApi';
import {LoadingState} from "./contracts/state";

export function* fetchTagsRequest() {
    try {
        const items = yield call(TagsApi.fetchTags);
        yield put(setTags(items));
    }catch (e) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSags() {
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}