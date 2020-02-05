import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkbox, Typography, FormControlLabel, Grid } from '@material-ui/core';

export default function AlertDialog({
    open,
    handleClose,
    setAddedInsurance,
    isCountryList,
    dialogContentText,
    dialogTitle,
    buttonAccept,
    buttonReject,
    listOfCountries,
    setTravelCountries
}) {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {/* Please purchase our insurance ... */}
                    {isCountryList ? listOfCountries.map(country => <FormControlLabel
                        key={country}
                        style={{ marginLeft: '10px' }}
                        control={
                            <Checkbox
                                checked={false}
                                onChange={() => console.log('changed')}
                                value="countries"
                                color="primary"
                            />
                        }
                        label={country}
                    />
                    ) : dialogContentText}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {!isCountryList ? <><Button value='add' onClick={() => handleClose('add')} color="primary">
                    {/* Add Insurance */}
                    {buttonAccept}
                </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        {/* Continue without insurance */}
                        {buttonReject}
                    </Button></> : <Button onClick={() => handleClose('Ok')}>Ok</Button>}
            </DialogActions>
        </Dialog >

    );
}
