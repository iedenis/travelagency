import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';

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
    const { travelCountries, setTravelCountries, setListOfCountries } = rest;
    const handleCheckCountry = country => event => {
        if (event.target.checked === true) setTravelCountries([...travelCountries, country])
        else {
            const temp = travelCountries.filter(item => item !== country);
            setTravelCountries(temp)
        }
        setListOfCountries({ ...listOfCountries, [country]: event.target.checked })
    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
            <DialogContent>

                <FormGroup>

                    {isCountryList ? Object.entries(listOfCountries).map(([country, value]) => {
                         return <FormControlLabel
                            key={country}
                            style={{ marginLeft: '10px' }}
                            label={country}

                            control={

                                <Checkbox
                                    checked={value}
                                    onChange={handleCheckCountry(country)}
                                    value={value}
                                    color="primary"
                                />
                            }
                        />
                    }
                    ) : dialogContentText}
                </FormGroup>

                {/* </DialogContentText> */}
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
