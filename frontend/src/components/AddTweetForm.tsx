import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import {fetchAddTweet} from '../store/ducks/tweets/actionCreators';
import {selectAddFormState} from '../store/ducks/tweets/selectors';
import {useHomeStyles} from '../pages/Home/theme';

// core
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button/Button";
import {Alert} from '@material-ui/lab';

// icons
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedAlt";
import {AddFormState} from "../store/ducks/tweets/contracts/state";


interface IAddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
}

const AddTweetForm: React.FC<IAddTweetFormProps> = ({classes, maxRows}: IAddTweetFormProps): React.ReactElement => {
    const dispatch = useDispatch();
    const addFormState = useSelector(selectAddFormState);
    const MAX_LENGTH = 280;

    const [text, setText] = React.useState<string>('');

    const textLimit = Math.round((text.length / MAX_LENGTH) * 100);

    const textCount = MAX_LENGTH - text.length;

    const handleClickAddTweet = (): void => {
        dispatch(fetchAddTweet(text));
        setText('');
    };

    const handleChangeTextArea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    }


    return (
        <div>

            <div className={classes.addFormBody}>
                <Avatar className={classes.tweetAvatar}
                        alt={`Аватар`}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRltgWf_zyHu8EBoX9vQ42_zzLWOp7ayRKyXg&usqp=CAU"/>
                <TextareaAutosize rowsMax={maxRows}
                                  onChange={handleChangeTextArea}
                                  className={classes.addFormTextarea}
                                  value={text}
                                  placeholder="Что происходит?"/>
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetFooterHeader)}>
                    <IconButton color="primary">
                        <ImageOutlinedIcon style={{fontSize: 26}}/>
                    </IconButton>
                    <IconButton color="primary">
                        <EmojiIcon style={{fontSize: 26}}/>
                    </IconButton>
                </div>
                <div className={classes.addFormBottomRight}>
                    {text && (
                        <>
                            <span>{textCount}</span>
                            <div className={classes.addFormCircleProgress}>
                                <CircularProgress style={textLimit >= 100 ? {color: "red"} : undefined}
                                                  variant="static" size={20} thickness={5}
                                                  value={textLimit > 100 ? 100 : textLimit}/>
                                <CircularProgress style={{color: 'rgba(0,0,0,0.1)'}}
                                                  variant="static" size={20} thickness={5}
                                                  value={100}/>
                            </div>
                        </>)}
                    <Button onClick={handleClickAddTweet}
                            disabled={addFormState === AddFormState.LOADING || !text || textLimit >= MAX_LENGTH}
                            color="primary"  variant="contained">
                        {addFormState === AddFormState.LOADING ?
                            <CircularProgress color="inherit" size={16}/> : "Твитнуть"}
                    </Button>
                </div>
            </div>
            {addFormState === AddFormState.ERROR && <Alert severity="error">
                Ошибка при добавление твита   <span role="img">😭</span>
            </Alert>}
        </div>
    );
};

export default AddTweetForm;
