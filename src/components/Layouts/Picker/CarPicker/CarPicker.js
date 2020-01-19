import React, { useState } from 'react'
import { Grid, Checkbox, FormControlLabel, Button } from '@material-ui/core'
import styled from 'styled-components'
import CarDatePicker from './CarDatePicker'
import AirportSelect from './AirportSelect'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
const today = new Date();

const SearchButton = styled(Button)`
@media screen and (max-width: 600px) {
    width:100%;
}
`
const Form = styled.form`
`
const handleAirportSelected = () => {
    console.log('selected');
}
const handleDateAndTime = () => {
    console.log("Handle date");
}

const CarPicker = () => {

    const [dates, setDates] = useState({
        pickUpDate: today,
        dropOffDate: new Date().setDate(today.getDate() + 3),
    })
    const [isDifferentLocation, setIsDifferentLocation] = useState(false);

    const handleCheckChange = (event) => {
        setIsDifferentLocation(event.target.checked)
    }

    const validateForm = () => {
        console.log('validating the form');
    }

    return (
        <Form noValidate autoComplete="off">

            <Grid container direction='column' spacing={2}>
                <Grid item xs={12} >
                    <AirportSelect isPickupDate={true} handleAirportSelected={handleAirportSelected} />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckChange}
                                color="primary"
                            />
                        }
                        label="Drop-off at different location"
                    />
                    {isDifferentLocation ?
                        <Grid item><AirportSelect isPickupDate={false} handleAirportSelected={handleAirportSelected} /></Grid> : null
                    }

                </Grid>
                <Grid container spacing={2} >
                    <CarDatePicker
                        setDates={setDates}
                        isPickupDate={true}
                        handleDateAndTime={handleDateAndTime}
                    />
                </Grid>
                <Grid container >
                    <CarDatePicker
                        isPickupDate={false}
                        handleDateAndTime={handleDateAndTime}
                    />
                </Grid>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> No credit card fees</div>
                    <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> No amendment fees</div>
                    <div><FontAwesomeIcon icon={faCheck} style={{ color: 'green' }} /> 24/7 phone support</div>
                </div>


            </Grid>

            <Grid container justify='center'>
                <Grid style={{ marginTop: '20px' }} item>
                    <Link to='/results'><SearchButton onClick={validateForm} variant='contained' color='secondary'>Search</SearchButton></Link>
                </Grid>
            </Grid>

        </Form>

    )
}

export default CarPicker
