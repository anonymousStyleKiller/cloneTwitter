import React from 'react';
import {Paper} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import {useHomeStyles} from '../pages/Home/theme';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import {useSelector} from "react-redux";
import {selectTagsItems} from "../store/ducks/tags/selectors";
import {selectTweetsLoaded} from "../store/ducks/tweets/selectors";
import {Link} from "react-router-dom";

interface ITags {
    classes: ReturnType<typeof useHomeStyles>;
}

const Tags: React.FC<ITags> = ({classes}: ITags): React.ReactElement | null => {
    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectTweetsLoaded);

    if (!isLoaded) {
        return null;
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader}>
                <b>Актуальные темы</b>
            </Paper>
            <List>
                <Divider component="li"/>
                {
                    items.map(obj =>
                        <React.Fragment key={obj._id}>
                            <ListItem className={classes.rightSideBlockItem}>
                                <Link to={`/home/search?q=${obj.name}`}>
                                    <ListItemText primary={obj.name}
                                                  secondary={
                                                      <Typography variant="body1" component="span">
                                                          {obj.count}
                                                      </Typography>
                                                  }/>
                                </Link>
                            </ListItem>
                            <Divider component="li"/>
                        </React.Fragment>
                    )
                }

            </List>
        </Paper>
    );
};

export default Tags;
