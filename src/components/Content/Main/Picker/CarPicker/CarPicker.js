import React from 'react'
import { Grid, TextField, MenuItem, Checkbox, FormControlLabel } from '@material-ui/core'
import styled from 'styled-components'
import CarDatePicker from '../CarDatePicker'

const Form = styled.form`
width:70%;
`

const airports = [
    'Ben Gurion Airport',
    'Haifa Airport',
    'Ramon Airport'
]

const handleChange = () => {
    console.log("CHANGED");
}
const handleCheckChange = () => {
    console.log("CHECKED");
}
const handleDateAndTime = () => {
    console.log("Handle date");
}
const CarPicker = () => {
    return (
        <Grid container style={{ border: '1px solid' }}>
            <Grid item xs={12} style={{ border: '1px solid' }}>
                <Form noValidate autoComplete="off">
                    <TextField
                        id="airport-selection"
                        select
                        label="Pick-up location"
                        value={airports[0]}
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    >
                        {airports.map((airport, idx) => (
                            <MenuItem key={idx} value={airport}>
                                {airport}
                            </MenuItem>
                        ))}
                    </TextField>
                </Form>
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedB}
                            onChange={handleCheckChange}
                            value="checkedB"
                            color="primary"
                        />
                    }
                    label="Drop-off at different location"
                />
            </Grid>
            <CarDatePicker 
                isPickupDate={true}
                handleDateAndTime={handleDateAndTime}
            />
            <CarDatePicker
                isPickupDate={false}
                handleDateAndTime={handleDateAndTime}
            />

        </Grid>
    )
}

export default CarPicker
