import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkbox, Typography, FormControlLabel, Grid, Paper } from '@material-ui/core';
import { useEffect } from 'react';

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
    ...rest
}) {
    console.log(rest);
    const { travelCountries, setTravelCountries, setListOfCountries } = rest;
    const handleCheckCountry = country => event => {
        const idx = event.target.value
        const isChecked = event.target.checked
console.log(isChecked);
        console.log(listOfCountries)
        const temp = listOfCountries
        temp[idx].checked = isChecked;
        setTimeout(()=>setListOfCountries(temp)) 
    }
    useEffect(() => {
      console.log(listOfCountries);
    }, [listOfCountries])
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
                    {isCountryList ? listOfCountries.map((country, idx) => {console.log(country.checked);return <FormControlLabel
                        key={country.countryName}
                        style={{ marginLeft: '10px' }}
                        label={country.countryName}

                        control={
                           
                            <Checkbox
                                checked={country.checked}
                                onChange={handleCheckCountry(country)}
                                value={idx}
                                color="primary"
                            />
                        }
                    />}
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
