import React, { useState } from 'react'
import { Button, Grid, useTheme, Box, Checkbox, useMediaQuery, Select, MenuItem, Paper, FormControlLabel, Typography } from '@material-ui/core'
import add_driver_icon from './images/add_driver_black.svg'
import baby_booster_icon from './images/baby_booster_black.svg'
import baby_car_seat_icon from './images/baby_car_seat _black.svg'
import gps_icon from './images/gps_black.svg'
import styled from 'styled-components'
import AlertDialog from '../../Layouts/AlertDialog';
import Alert from '@material-ui/lab/Alert';
import { NavigateBefore } from '@material-ui/icons/';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const Wrapper = styled.div`
    height: ${props => props.ismobile ? '100%' : '90vh'};
`

const Insurances = styled(Paper)`
    display:flex;
    flex-direction:column;
    margin-bottom: 32px;
`
const AddInsurance = ({

    additionalDriverPrice,
    childBoosterPrice,
    childSeatPrice,
    gpsPrice,

    handleNext,
    handleBack,
    currencySign,
    countries,

    extras,
    setExtras,

    travelCountries,
    setTravelCountries,
    listOfCountries,
    setListOfCountries,
    addedInsurance,
    setAddedInsurance
}) => {

    const Icon = styled.img`
    color: ${useTheme().palette.primary.main}
    width: 40px;
    height: 40px;
    `
    const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));

    const [open, setOpen] = useState(false);
    const [countriesListOpen, setCountriesListOpen] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event) => {
        if (event === 'add') setAddedInsurance(true);
        handleNext();
        setOpen(false);
    };
    const handleClickCountriesListOpen = () => {
        setCountriesListOpen(true);
    }
    const handleCloseCountriesListClose = () => {
        setCountriesListOpen(false)
    }

    const handleChange = name => event => {
        const checkValue = event.target.checked;
        setExtras({ ...extras, [name]: { isChecked: checkValue, count: checkValue ? 1 : 0 } })
    };
    const handleSelect = name => event => {
        setExtras({
            ...extras, [name]: {
                isChecked: (event.target.value > 0) || false,
                count: event.target.value
            }
        })
    }
    const handleTravel = () => {
        setCountriesListOpen(true)
    }
    /**
     * Components for heading and additional features
     */

    const Heading = ({ label }) => {
        return <Typography
            variant='h6'

            // color='primary'
            style={{ paddingLeft: '18px' }}>
            {label}
        </Typography>
    }

    const numberOfOptions = number => {
        const optionsArray = [];
        for (let i = 0; i < number; i++) {
            optionsArray.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
        }
        return optionsArray;
    }

    const AdditionalFeature = ({ icon, description, price, value }) => {

        return <Grid item xs={12} sm={12} lg={6}
            style={{ display: 'flex', padding: '10px', justifyContent: 'space-between' }} >
            <Box display='flex'>
                <Checkbox
                    checked={extras[value].isChecked}
                    value={value}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    onChange={handleChange(value)}
                />
                <div style={{ display: 'flex', alignItems: 'center' }}>

                    <Icon src={icon} alt={icon} />
                    <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body1'>{description}</Typography>
                        <Typography variant='body2' style={{ color: 'green' }}>Only {price}{currencySign} per day</Typography>
                    </div>
                </div>

            </Box>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={extras[value].count}
                onChange={handleSelect(value)}
            >
                {numberOfOptions(value === 'gps' ? 1 : 10)}
            </Select>
        </Grid>

    }

    return (

        <Wrapper ismobile={isMobile.toString()} >
            <Insurances  >
                <Heading label='Please add insurances to travel with real peace of mind' />
                <FormControlLabel
                    style={{ marginLeft: '10px' }}
                    control={
                        <Checkbox
                            checked={addedInsurance}
                            onChange={event => setAddedInsurance(event.target.checked)}
                            value="insurance"
                            color="primary"
                        />
                    }
                    label={<Typography variant='h6'>Add excess charge refund coverage</Typography>}
                />

                <FormControlLabel
                    style={{ marginLeft: '10px' }}
                    control={
                        <Checkbox
                            checked={addedInsurance}
                            onChange={event => setAddedInsurance(event.target.checked)}
                            value="insurance"
                            color="primary"
                        />
                    }
                    label={<Typography variant='h6'>Tires, Windshields and Other Coverages</Typography>}
                />
            </Insurances>

            <Paper style={{ marginBottom: '32px' }}>

                <Grid container direction='column' >
                    <Heading label='Extras' />
                    <AdditionalFeature
                        icon={add_driver_icon}
                        description='Additional driver'
                        price={additionalDriverPrice}
                        value='driver'
                    />
                    <AdditionalFeature
                        icon={baby_booster_icon}
                        description='Child booster'
                        price={childBoosterPrice}
                        value='booster' />
                    <AdditionalFeature
                        icon={baby_car_seat_icon}
                        description='Child seat'
                        price={childSeatPrice}
                        value='child_seat'
                    />
                    <AdditionalFeature
                        icon={gps_icon}
                        description='GPS device'
                        price={gpsPrice}
                        value='gps'
                    />
                    <div>

                    </div>
                </Grid>
            </Paper>

            <Paper style={{ marginTop: '20px' }}>

                <Heading label="Travel to another country?" />
                <FormControlLabel
                    style={{ marginLeft: '10px' }}
                    control={
                        <Checkbox
                            checked={travelCountries.length > 0}
                            onChange={handleTravel}
                            value="insurance"
                            color="primary"
                        />
                    }
                    label={<Typography variant='h6'>I plan to travel to another country</Typography>}

                />
                <AlertDialog
                    dialogTitle={'List of countries you can travel to with the requested car'}
                    isCountryList={true}
                    handleClickOpen={handleClickCountriesListOpen}
                    handleClose={handleCloseCountriesListClose}
                    open={countriesListOpen}
                    listOfCountries={listOfCountries}
                    setListOfCountries={setListOfCountries}
                    travelCountries={travelCountries}
                    setTravelCountries={setTravelCountries}
                    buttonAccept={'I want to add the insurance'} //have to remove it
                    buttonReject={'Continue without insurance'}

                />
            </Paper>
            <Alert style={{ marginTop: '32px' }} severity="success"><Typography variant='h6'>Good news, Full Insurance is available</Typography>
                Cover any bumps or scrapes and have a hassle-free rental. Book everything in one place quickly and easily.

</Alert>
            <Grid container justify='space-between'>
                <Button style={{ marginRight: '20px', marginTop: '20px' }} size="small" onClick={handleBack}>
                    <NavigateBefore /> Back to car choosing
        </Button>
                <Button style={{ marginTop: '20px' }} size="small" onClick={addedInsurance ? handleNext : handleClickOpen}>
                    Go to summary
<NavigateNextIcon />
                </Button>
            </Grid>
            <AlertDialog
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                setAddedInsurance={setAddedInsurance}
                dialogContentText={'Please purchase our insurance ...'}
                dialogTitle={'Add Insurance'}
                buttonAccept={'I want to add the insurance'}
                buttonReject={'Continue without insurance'}
                isCountryList={false}
                listOfCountries={[]}
                travelCountries={{}}
            />


        </Wrapper>



    )
}

export default AddInsurance
