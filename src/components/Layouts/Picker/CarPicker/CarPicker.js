import React, { useState, useContext, useEffect } from 'react'
import { Grid, Checkbox, FormControlLabel, Button, useTheme, TextField } from '@material-ui/core'
import styled from 'styled-components'
import CarDatePicker from './CarDatePicker'
import SearchLocation from './SearchLocation'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Redirect } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SearchDetailsContext } from '../../../../App'
import { useTranslation } from 'react-i18next'
const today = new Date();
const SearchButton = styled(Button)`
width: 100%;
height: ${props => props.ispc ? '100%' : '50px'};
@media screen and (max-width: 600px) {
    width:100%;
}
`
const Form = styled.form`
`


const CarPicker = () => {
    const { t } = useTranslation()
    const [searchDetails, setSearchDetails] = useContext(SearchDetailsContext)
    const [ageError, setAgeError] = useState({
        error: false,
        helperText: ''
    })
    const [isValidated, setIsValidated] = useState(false)

    const [dates, setDates] = useState({
        pickUpDate: today,
        dropOffDate: new Date().setDate(today.getDate() + 3),
    })
    const [isDifferentLocation, setIsDifferentLocation] = useState(false);

    const [tempSearchDetails, setTempSearchDetails] = useState({
        pickUpLocation: searchDetails.pickUpLocation,
        dropOffLocation: searchDetails.dropOffLocation,
        pickUpDate: searchDetails.pickUpDate,
        pickUpTime: searchDetails.pickUpTime,
        dropOffDate: searchDetails.dropOffDate,
        dropOffTime: searchDetails.dropOffTime,
        driverAge: searchDetails.driverAge
    })

    const handleLocationSelected = (location, isPickupLocation) => {
        const key = isPickupLocation ? 'pickUpLocation' : 'dropOffLocation'
        setTempSearchDetails({
            ...tempSearchDetails, [key]: location
        })
    }

    const handleTimeSelected = (time, isPickUpTime) => {
        const type = isPickUpTime ? 'pickUpTime' : 'dropOffTime'
        setTempSearchDetails({
            ...tempSearchDetails, [type]: time
        })
    }
    const handleDateSelected = (date, isPickUpdate) => {
        const typeOfDate = isPickUpdate ? 'pickUpDate' : 'dropOffDate'
        setTempSearchDetails({
            ...tempSearchDetails, [typeOfDate]: date
        })
    }

    const validateForm = () => {
        if (tempSearchDetails.driverAge < 18) {
            console.log('setting');
            setAgeError({
                error: true,
                helperText: t('picker.carpicker.driverAge.error')
            })

        }
        else {
            setAgeError({
                error: false,
                helperText: ''
            })
            setIsValidated(true)

            setSearchDetails(tempSearchDetails)

        }
    }

    const matches = useMediaQuery(useTheme().breakpoints.up('md'));
    const justify = `${matches ? 'flex-end' : 'center'}`;

    return (
        <Form noValidate autoComplete="off">

            <Grid container direction='column' spacing={2} >
                <Grid item xs={12}>
                    <SearchLocation
                        isPickupDate={true}
                        handleLocationSelected={handleLocationSelected}
                        location={tempSearchDetails.pickUpLocation}
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={event => setIsDifferentLocation(event.target.checked)}
                                color="primary"
                            />
                        }
                        label={t('picker.carpicker.dropOffDifferentLocation')}
                    />
                    {isDifferentLocation ?
                        <Grid item>
                            <SearchLocation
                                isPickupDate={false}
                                handleLocationSelected={handleLocationSelected}
                                location={tempSearchDetails.dropOffLocation}
                            /></Grid> : null
                    }

                </Grid>

                <Grid container
                    spacing={2} >
                    <CarDatePicker
                        time={tempSearchDetails.pickUpTime}
                        date={tempSearchDetails.pickUpDate}
                        setTempSearchDetails={setTempSearchDetails}
                        setDates={setDates}
                        isPickupDate={true}
                        handleTimeSelected={handleTimeSelected}
                        handleDateSelected={handleDateSelected}
                    />
                </Grid>
                <Grid container
                    spacing={2}
                >
                    <CarDatePicker
                        time={tempSearchDetails.dropOffTime}
                        date={tempSearchDetails.dropOffDate}
                        isPickupDate={false}
                        handleTimeSelected={handleTimeSelected}
                        handleDateSelected={handleDateSelected}
                    />
                </Grid>
                <Grid container justify='space-between' alignItems="center"  >
                    <Grid item sm={8} lg={8} xs={7}>

                        <div  >
                            <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> {t('picker.carpicker.freeFeatures.creditCard')}</div>
                            <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> {t('picker.carpicker.freeFeatures.amedments')}</div>
                            <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> {t('picker.carpicker.freeFeatures.support')}</div>
                        </div>
                    </Grid>
                    <Grid item sm={4} lg={4} xs={5}>

                        <TextField
                            required={true}
                            {...ageError}
                            style={{ float: 'right', maxWidth: '143px' }}
                            id="standard-textarea"
                            label={t('picker.carpicker.driverAge.driverAge')}
                            type="number"
                            value={tempSearchDetails.driverAge}
                            name='driverAge'
                            onChange={event => setTempSearchDetails({ ...tempSearchDetails, [event.target.name]: event.target.value })}
                        />

                    </Grid>
                </Grid>



            </Grid>

            <Grid container
                justify={justify}
            >
                <Grid xs={12} sm={8} md={4} lg={4} style={{ marginTop: '20px' }} item>

                    <Link style={{ textDecoration: 'none' }} to={tempSearchDetails.driverAge > 17 ? '/results' : '/'} >
                        <SearchButton ispc={matches.valueOf.toString()} onClick={validateForm} variant='contained' color='secondary'>{t('picker.search')}</SearchButton>
                    </Link>
                </Grid>
            </Grid>

        </Form >

    )
}

export default CarPicker
