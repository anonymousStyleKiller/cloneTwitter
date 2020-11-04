import React from 'react';
import {Link} from "react-router-dom";
import {IconButton} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography/Typography";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHorizOutlined";
import Button from "@material-ui/core/Button/Button";
import Hidden from "@material-ui/core/Hidden";
import {useHomeStyles} from '../pages/Home/theme';
import ModalBlock from './ModalBlock';
import AddTweetForm from "./AddTweetForm";

interface ISideMenu {
    classes: ReturnType<typeof useHomeStyles>;
}

const SideMenu: React.FC<ISideMenu> = ({classes}: ISideMenu): React.ReactElement => {
    const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false);

    const handleClickOpenAddTweet =  () =>{
        setVisibleAddTweet(true);
    }

    const onCloseAddTweet =  () =>{
        setVisibleAddTweet(false);
    }

    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <Link to="/home">
                    <IconButton className={classes.logo} color="primary">
                        <TwitterIcon className={classes.logoIcon}/>
                    </IconButton>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemTypography} variant="h6">Поиск</Typography>
                    </Hidden>
                </div>

            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemTypography}
                                    variant="h6">Сообщения</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <EmailIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemTypography}
                                    variant="h6">Сообщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookmarkIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemTypography}
                                    variant="h6">Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <FeaturedPlayListIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemTypography}
                                    variant="h6">Списки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <PersonIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemTypography}
                                    variant="h6">Профиль</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MoreHorizIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemTypography}
                                    variant="h6">Больше</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button onClick={handleClickOpenAddTweet}
                    className={classes.sideMenuTweetButton}
                    variant="contained" color="primary"
                        fullWidth>
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon/>
                    </Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddTweet} visible={visibleAddTweet}>
                    <div style={{width: 550}}>
                        <AddTweetForm maxRows={15} classes={classes}/>
                    </div>
                </ModalBlock>
            </li>
        </ul>
    );
};

export default SideMenu;
