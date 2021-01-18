import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// core
import { Avatar, IconButton, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Typography from '@material-ui/core/Typography/Typography';

// icons
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PublishIcon from "@material-ui/icons/Publish";

// these components of mine

import { selectTweetItems, selectTweetLoading } from '../store/ducks/tweet/selectors';
import { fetchTweetData, setTweetData } from '../store/ducks/tweet/actionCreators';
import { useHomeStyles } from '../pages/Home/theme';
import classnames from 'classnames';

// others libriary
import {format} from "date-fns";
import ruLang from "date-fns/locale/ru";



const FullTweet: React.FC = (): React.ReactElement | null => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweetData = useSelector(selectTweetItems);
  const isLoading = useSelector(selectTweetLoading);
  const params: { id?: string } = useParams();
  const id = params.id;

  React.useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id));
    }

    return () => {
      dispatch(setTweetData(undefined));
    };
  }, [dispatch, id]);

  if (!tweetData) {
    return null;
  }

  if (isLoading) {
    return (
      <div className={classes.tweetsCentred}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Paper className={classes.fullTweet}>
      <div className={classnames(classes.tweetsHeaderUser)}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватар пользователя ${tweetData.user.username}`}
          src={tweetData.user.avatarUrl}
        />
        <Typography>
          <b>{tweetData.user.fullname}</b>&nbsp;
          <div>
            <span className={classes.tweetsColor}>@{tweetData.user.username}</span>&nbsp;
            <br />
            <span className={classes.tweetsColor}>
              {format(new Date(tweetData.createdAt), "H:mm", {locale: ruLang} )}
            </span>
            &nbsp;
            <span className={classes.tweetsColor}>
              {format(new Date(tweetData.createdAt), "dd MMM yyyy г.", {locale: ruLang} )}
            </span>
          </div>
        </Typography>
      </div>
      <Typography className={classes.fullTweetText} variant="body1" gutterBottom>
        {tweetData.text}
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
    </Paper>
  );
};

export default FullTweet;
