import {combineReducers} from "redux";
import {tweetsReducer} from "./ducks/tweets/reducer";
import {tagsReducer} from "./ducks/tags/reducer";
import {tweetReducer} from "./ducks/tweet/reducer";


export const rootReducers = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer,
});
