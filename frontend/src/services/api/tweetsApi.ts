import { axios } from "../../core/axios";
import {ITweet} from "../../store/ducks/tweets/contracts/state";

interface IResponse<T> {
    status: string;
    data: T
}

export const TweetsApi = {
    async fetchTweets(): Promise<ITweet[]> {
        const {data} = await axios.get<IResponse<ITweet[]>>("/tweets");
        return data.data;
    },
    async fetchTweetData(id: string): Promise<ITweet> {
        const {data} = await axios.get<IResponse<ITweet>>('/tweets/' + id);
        return data.data;
    },
    async addTweet(payload: string): Promise<ITweet> {
        const {data} = await axios.post<IResponse<ITweet>>('/tweets', {text : payload});
        console.log(data)
        return data.data;
    }
}