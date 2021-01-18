import React from 'react';
import {Link} from "react-router-dom";
import classnames from "classnames";
import {useHistory} from "react-router-dom";

// core
import {Avatar, IconButton, MenuItem, Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";

// icons
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PublishIcon from "@material-ui/icons/Publish";
import MoreVertIcon from '@material-ui/icons/MoreVert';

// mine
import {useHomeStyles} from '../pages/Home/theme';
import {formatDate} from "../utils/formatDate";
import Menu from "@material-ui/core/Menu";


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

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
     const history =  useHistory();

    const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void=>{
        event.preventDefault();
        history.push(`/home/tweet/${_id}`);
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Link onClick={handleClickTweet} className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
            <Paper className={classnames(classes.tweet, classes.tweetsHeader)} variant="outlined">
                <Avatar className={classes.tweetAvatar} alt={`Аватар пользователя ${user.username}`}
                        src={user.avatarUrl}/>
                <div className={classes.tweetContent}>
                    <Typography className={classes.tweetHeader}>
                      <div>
                          <b>{user.username}</b>&nbsp;
                          <span className={classes.tweetsColor}>{user.fullname}</span>&nbsp;
                          <span className={classes.tweetsColor}>-</span>&nbsp;
                          <span className={classes.tweetsColor}>{formatDate(new Date(createdAt))}</span>&nbsp;
                      </div>
                        <div>
                            <IconButton
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    Редактировать
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Удалить твит
                                </MenuItem>
                            </Menu>
                        </div>
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
