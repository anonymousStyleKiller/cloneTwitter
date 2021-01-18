import makeStyles from "@material-ui/core/styles/makeStyles";
import grey from "@material-ui/core/colors/grey";

export const useHomeStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        fontSize: 36,
    },
    logoIcon: {
        margin: '15px 0'
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
        maxWidth: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: "0 25px 0 20px",
            borderRadius: 30,
            height: 50,
            marginBottom: 10,
            transition: 'background-color 0.15s  easy-out',
        },
    },
    sideMenuListItemTypography: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15
    },
    sideMenuListItemIcon: {
        fontSize: 32,
        marginLeft: -5,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: 0,
        borderBottom: 0,
    },
    tweetsHeader: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0,
        borderRadius: 0,
        padding: '15px',
        '& h6': {
            fontWeight: 800,
        }
    },
    tweetsHeaderUser: {
        display: "flex",
        alignItems: "center",
    },
    tweet: {
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        }
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContend: 'space-between'
    },
    tweetContent:{
      flex: 1
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetsColor: {
        color: grey[500],
    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: "center",
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        left: -12,
        width: 450,
    },
    tweetFooterHeader: {
        display: 'body',
    },
    tweetWrapper: {
        color: "inherit",
        textDecoration: "none"
    },
    fullTweet: {
        padding: 20
    },
    fullTweetText: {
        fontSize: 24,
        marginTop: 20,
        lineHeight: 1.3
    },
    rightSide: {
        paddingTop: 10,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: "transparent",
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: "#edf3f6",
        },
        '& a': {
            color: "inherit",
            textDecoration: "none",
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: "flex",
        width: "100%",
    },
    addFormBottom: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: "100%",
        border: 0,
        fontSize: 20,
        outline: 'none',
        resize: 'none',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        resize: 'none',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    }
}))