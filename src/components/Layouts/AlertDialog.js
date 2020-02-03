import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog({
    open,
    handleClose,
    setAddedInsurance
}) {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Purchase insurance"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Please purchase our insurance ...
            </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button value='add' onClick={()=>handleClose('add')} color="primary">
                    Add Insurance
            </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Continue without insurance
            </Button>
            </DialogActions>
        </Dialog >

    );
}
