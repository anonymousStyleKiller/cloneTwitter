import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Route} from "react-router-dom";

// core
import Typography from '@material-ui/core/Typography/Typography';
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper';
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button/Button";
import Divider from "@material-ui/core/Divider/Divider";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";

// icons
import SearchIcon from "@material-ui/icons/SearchOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";

// Mine
import Tweet from '../../components/Tweet';
import SideMenu from '../../components/SideMenu';
import AddTweetForm from "../../components/AddTweetForm";
import {SearchTextField} from '../../components/SearchTextField';
import {useHomeStyles} from './theme';
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectTweetsItems, selectTweetsLoading} from "../../store/ducks/tweets/selectors";
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import Tags from "../../components/Tags";
import BackButton from "../../components/BackButton";
import FullTweet from '../../components/FullTweet';

const Home = (): React.ReactElement => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();

    const isTweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectTweetsLoading);

    useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item sm={1} md={3}>
                    <SideMenu classes={classes}/>
                </Grid>
                <Grid item sm={8} md={6}>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Route path="/home/:any">
                                <BackButton/>
                            </Route>
                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant="h6">Твиты</Typography>
                            </Route>
                            <Route path="/home/tweet">
                                <Typography variant="h6">Твитнуть</Typography>
                            </Route>
                        </Paper>

                        <Route path={['/home', '/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}>
                                    <AddTweetForm classes={classes}/>
                                </div>
                                <div className={classes.addFormBottomLine}/>
                            </Paper>
                        </Route>
                        <Route path="/home" exact>
                            {isLoading ?
                                <div className={classes.tweetsCentred}>
                                    <CircularProgress/>
                                </div> :
                                isTweets.map(tweet =>
                                    <Tweet  {...tweet} key={tweet._id} classes={classes}/>
                                )}
                        </Route>
                        <Route path="/home/tweet/:id" exact>
                            <FullTweet/>
                        </Route>
                    </Paper>
                </Grid>
                <Grid item sm={3} md={3}>
                    <div className={classes.rightSide}>
                        <SearchTextField variant="outlined"
                                         placeholder="Поиск по Твиттеру" fullWidth
                                         InputProps={{startAdornment: (<SearchIcon/>)}}/>
                        <Tags classes={classes}/>
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader}>
                                <b>Кого читать</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.tweetAvatar}
                                                alt={`Аватар`}
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRltgWf_zyHu8EBoX9vQ42_zzLWOp7ayRKyXg&usqp=CAU"/>
                                    </ListItemAvatar>
                                    <ListItemText primary="Кетрин Винник"
                                                  secondary={
                                                      <Typography variant="body2" component="span">
                                                          @winnik
                                                      </Typography>
                                                  }/>
                                    <Button color="primary">
                                        <PersonAddIcon/>
                                    </Button>
                                </ListItem>
                                <Divider component="li"/>
                            </List>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Home;
