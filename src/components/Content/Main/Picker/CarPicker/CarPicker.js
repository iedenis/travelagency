import React, { useState } from 'react'
import { Grid, TextField, MenuItem, Checkbox, FormControlLabel, Button } from '@material-ui/core'
import styled from 'styled-components'
import CarDatePicker from './CarDatePicker'
import AirportSelect from './AirportSelect'

const today = new Date();
const Form = styled.form`
/* width:80%; */
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

    return (
        <Form noValidate autoComplete="off">

            <Grid container >
                <Grid item xs={12} >
                    <AirportSelect isPickupDate={true} handleAirportSelected={handleAirportSelected} />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={state.checkedB}
                                onChange={handleCheckChange}
                                // value="checkedB"
                                color="primary"
                            />
                        }
                        label="Drop-off at different location"
                    />
                    {isDifferentLocation ?
                        <Grid item><AirportSelect isPickupDate={false} handleAirportSelected={handleAirportSelected} /></Grid> : null
                    }

                </Grid>
                <CarDatePicker
                    setDates={setDates}
                    isPickupDate={true}
                    handleDateAndTime={handleDateAndTime}
                />
                <CarDatePicker
                    isPickupDate={false}
                    handleDateAndTime={handleDateAndTime}
                />

            </Grid>
            <Grid container justify='flex-end'>
                <Grid style={{marginTop:'20px'}} item>
                    <Button variant='contained' color='secondary'>Search</Button>
                </Grid>
            </Grid>

        </Form>

    )
}

export default CarPicker
