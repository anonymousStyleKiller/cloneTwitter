import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import {IconButton} from "@material-ui/core";

interface IModalBlockProps {
    title?: string;
    children: React.ReactNode;
    visible?: boolean;
    onClose: () => void;
}

const ModalBlock: React.FC<IModalBlockProps> =
    ({title, onClose, visible = false, children})
        : React.ReactElement | null => {

        if (!visible) {
            return null;
        }
        return (
            <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <IconButton onClick={onClose} color="secondary">
                        <CloseIcon style={{fontSize: 16}} color="secondary"/>
                    </IconButton>
                    <Typography gutterBottom variant="h4">
                        {title}
                    </Typography>
                </DialogTitle>
                <DialogContent>{children}</DialogContent>
            </Dialog>
        );
    };

export default ModalBlock;
