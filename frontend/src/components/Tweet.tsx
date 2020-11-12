import React from 'react';
import {Link} from "react-router-dom";
import classnames from "classnames";

// core
import {Avatar, IconButton, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";

// icons
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PublishIcon from "@material-ui/icons/Publish";

// mine
import {useHomeStyles} from '../pages/Home/theme';
import {formatDate} from "../utils/formatDate";


interface ITweet {
    _id: string,
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    createdAt: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

const Tweet: React.FC<ITweet> = ({_id, createdAt, classes, text, user}: ITweet): React.ReactElement => {
    return (
        <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
            <Paper className={classnames(classes.tweet, classes.tweetsHeader)} variant="outlined">
                <Avatar className={classes.tweetAvatar} alt={`Аватар пользователя ${user.username}`}
                        src={user.avatarUrl}/>
                <div>
                    <Typography>
                        <b>{user.username}</b>&nbsp;
                        <span className={classes.tweetsColor}>{user.fullname}</span>&nbsp;
                        <span className={classes.tweetsColor}>-</span>&nbsp;
                        <span className={classes.tweetsColor}>{formatDate(new Date(createdAt))}</span>&nbsp;
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {text}
                    </Typography>
                    <div className={classes.tweetFooter}>
                        <div>
                            <IconButton>
                                <ChatBubbleOutlineOutlinedIcon/>
                            </IconButton>
                            <span>1</span>
                        </div>
                        <div>
                            <IconButton>
                                <RepeatOutlinedIcon/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <FavoriteBorderOutlinedIcon/>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <PublishIcon/>
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Paper>
        </Link>
    );
};

export default Tweet;
