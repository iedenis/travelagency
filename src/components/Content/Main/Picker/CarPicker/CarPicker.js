import React from 'react'
import { Grid, TextField, MenuItem, Checkbox, FormControlLabel } from '@material-ui/core'
import styled from 'styled-components'
import DatePicker from '../DatePicker'

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
            <Grid item sm={8}>
                <DatePicker />
            </Grid>
            <Grid item sm={4}>
                Time
            </Grid>
            <Grid item sm={8}>
                Return date
            </Grid>
            <Grid item sm={4}>
                Time
            </Grid>

        </Grid>
    )
}

export default CarPicker
