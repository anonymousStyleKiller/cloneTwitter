import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography/Typography';
import Button from '@material-ui/core/Button/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import ModalBlock from '../components/ModalBlock';


export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    blueSide: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '60%',
        top: '60%',
        width: '200%',
        height: '200%',
        transform: 'translate(-50%, -50%)',

    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        weight: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20
        },
    },
    blueSideInfoItem: {
        marginBottom: 40
    },
    blueSideInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        flex: '0 0 50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 350,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginTop: 20,
        marginBottom: 60,
    },
    loginSideForm: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    registerFormControl: {
        marginBottom: theme.spacing(3),
    }

}))

const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
    }

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp')
    }

    const handleClickCloseModal = (): void => {
        setVisibleModal(undefined)
    }

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon}/>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideInfoIcon}/>
                            Читайте о том, что вам интересно.</Typography>
                    </li>
                    <li className={classes.blueSideInfoItem}>
                        <Typography variant="h6">
                            <PeopleOutlineIcon className={classes.blueSideInfoIcon}/>
                            Узнайте, о чем говорят в мире.</Typography>
                    </li>
                    <li className={classes.blueSideInfoItem}>
                        <Typography variant="h6">
                            <ModeCommentOutlinedIcon className={classes.blueSideInfoIcon}/>
                            Присоединяйтесь к общению.</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon}/>
                    <Typography className={classes.loginSideTitle} gutterBottom variant="h4">Узнайте, что происходит в
                        мире прямо сейчас</Typography>
                    <Typography>
                        <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
                    </Typography>
                    <br/>
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: 12}} variant="contained"
                            color="primary"
                            fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>Войти</Button>

                    <ModalBlock visible={visibleModal === "signIn"}
                                onClose={handleClickCloseModal}
                                title="Войти в акаунт">
                        <FormGroup className={classes.registerFormControl}>
                            <TextField
                                className={classes.loginSideForm}
                                autoFocus
                                margin="dense"
                                id="e-mail"
                                label="Почта"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                className={classes.loginSideForm}
                                autoFocus
                                margin="dense"
                                id="password"
                                label="Пароль"
                                type="password"
                                fullWidth
                            />
                        </FormGroup>
                    </ModalBlock>
                    <ModalBlock visible={visibleModal === "signUp"}
                                onClose={handleClickCloseModal}
                                title="Создайте учётную запись">
                        <FormGroup>
                            <TextField
                                className={classes.registerField}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Имя"
                                type="name"
                                fullWidth
                            />
                            <TextField
                                className={classes.registerField}
                                autoFocus
                                margin="dense"
                                id="e-mail"
                                label="Почта"
                                type="e-mail"
                                fullWidth
                            />
                            <TextField
                                className={classes.registerField}
                                autoFocus
                                margin="dense"
                                id="password"
                                label="Пароль"
                                type="password"
                                fullWidth
                            />
                        </FormGroup>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
