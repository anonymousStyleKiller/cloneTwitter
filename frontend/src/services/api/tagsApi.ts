import axios from "axios";
import {ITagsState} from "../../store/ducks/tags/contracts/state";

export const TagsApi = {
    fetchTags(): Promise<ITagsState['items']> {
        return axios.get("/tags")
            .then(({data})=>data);
    },
}