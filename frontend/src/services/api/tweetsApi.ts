import axios from "axios";
import {ITweet, ITweetState} from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
    fetchTweets(): Promise<ITweetState['items']> {
        return axios.get("/tweets")
            .then(({data}) => data);
    },
    fetchTweetData(id: string): Promise<ITweet[]> {
        return axios.get('/tweets?_id=' + id)
            .then(({data}) => data);
    },
   addTweet(payload: ITweet): Promise<ITweet> {
        return axios.post('/tweets', payload).then(({data}) => data);
    }
}