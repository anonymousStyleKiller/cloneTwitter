import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectTweetItems, selectTweetLoading } from '../store/ducks/tweet/selectors';
import { useHomeStyles } from '../pages/Home/theme';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { fetchTweetData, setTweetData } from '../store/ducks/tweet/actionCreators';
import classnames from 'classnames';
import { Avatar, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import { formatDate } from './../utils/formatDate';

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
            <span className={classes.tweetsColor}>{formatDate(new Date(tweetData.createdAt))}</span>
            &nbsp;
          </div>
        </Typography>
      </div>
      <Typography className={classes.fullTweetText} variant="body1" gutterBottom>
        {tweetData.text}
      </Typography>
    </Paper>
  );
};

export default FullTweet;
